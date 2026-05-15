import 'package:flutter/material.dart';
import '../services/api_service.dart';
import '../theme/app_theme.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});
  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _emailController = TextEditingController();
  int totalClients = 0;
  bool subscribing = false;
  bool subscribed = false;

  @override
  void initState() {
    super.initState();
    _loadStats();
  }

  Future<void> _loadStats() async {
    final data = await ApiService.getPublicStats();
    if (data != null && mounted) {
      setState(() => totalClients = (data['data']?['totalClients'] ?? 0) as int);
    }
  }

  Future<void> _subscribe() async {
    if (_emailController.text.isEmpty) return;
    setState(() => subscribing = true);
    final ok = await ApiService.subscribe(_emailController.text.trim());
    setState(() { subscribing = false; subscribed = ok; });
    if (ok) _emailController.clear();
    await Future.delayed(const Duration(seconds: 3));
    if (mounted) setState(() => subscribed = false);
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Hero
          Container(
            width: double.infinity,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topRight,
                end: Alignment.bottomLeft,
                colors: isDark
                    ? [const Color(0xFF0F172A), const Color(0xFF1E293B)]
                    : [const Color(0xFFEFF6FF), Colors.white],
              ),
            ),
            padding: const EdgeInsets.fromLTRB(24, 60, 24, 40),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                  decoration: BoxDecoration(
                    color: AppTheme.primary.withOpacity(0.1),
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(color: AppTheme.primary.withOpacity(0.3)),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.rocket_launch, size: 14, color: AppTheme.primary),
                      const SizedBox(width: 6),
                      Text('Innovate • Build • Empower',
                          style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.primary)),
                    ],
                  ),
                ),
                const SizedBox(height: 20),
                RichText(
                  text: TextSpan(
                    children: [
                      TextSpan(
                        text: 'Woyyuu\n',
                        style: TextStyle(
                          fontSize: 52, fontWeight: FontWeight.w900,
                          color: isDark ? Colors.white : const Color(0xFF0F172A),
                          height: 1.1,
                        ),
                      ),
                      const TextSpan(
                        text: 'Tech',
                        style: TextStyle(
                          fontSize: 52, fontWeight: FontWeight.w900,
                          foreground: Paint()..shader = const LinearGradient(
                            colors: [AppTheme.primary, AppTheme.cyan],
                          ).createShader(Rect.fromLTWH(0, 0, 200, 60)),
                          height: 1.1,
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 8),
                Container(width: 48, height: 4, decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [AppTheme.primary, AppTheme.cyan]),
                  borderRadius: BorderRadius.circular(2),
                )),
                const SizedBox(height: 16),
                Text('Where Ideas Become Reality',
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.w800,
                        color: isDark ? Colors.grey[300] : const Color(0xFF334155))),
                const SizedBox(height: 12),
                Text(
                  'We turn complex ideas into powerful digital products. From scalable web platforms to sleek mobile apps — Woyyuu Tech engineers solutions that drive real business growth.',
                  style: TextStyle(fontSize: 14, height: 1.6,
                      color: isDark ? Colors.grey[400] : Colors.grey[600]),
                ),
                const SizedBox(height: 24),
                // Subscribe
                Row(
                  children: [
                    Expanded(
                      child: Container(
                        height: 48,
                        decoration: BoxDecoration(
                          color: isDark ? AppTheme.darkCard : Colors.white,
                          borderRadius: const BorderRadius.horizontal(left: Radius.circular(24)),
                          border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
                        ),
                        child: Row(
                          children: [
                            const SizedBox(width: 16),
                            Icon(Icons.mail_outline, size: 18, color: Colors.grey[400]),
                            const SizedBox(width: 8),
                            Expanded(
                              child: TextField(
                                controller: _emailController,
                                keyboardType: TextInputType.emailAddress,
                                style: TextStyle(fontSize: 14, color: isDark ? Colors.white : Colors.black87),
                                decoration: InputDecoration(
                                  hintText: 'Your email',
                                  hintStyle: TextStyle(color: Colors.grey[400], fontSize: 14),
                                  border: InputBorder.none,
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                    GestureDetector(
                      onTap: subscribing ? null : _subscribe,
                      child: Container(
                        height: 48,
                        padding: const EdgeInsets.symmetric(horizontal: 20),
                        decoration: const BoxDecoration(
                          gradient: LinearGradient(colors: [AppTheme.primary, AppTheme.cyan]),
                          borderRadius: BorderRadius.horizontal(right: Radius.circular(24)),
                        ),
                        child: Center(
                          child: subscribing
                              ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2))
                              : Text(subscribed ? '✓ Done!' : 'Subscribe →',
                                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13)),
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 20),
                // Social proof
                Row(
                  children: [
                    ...['G', 'L', 'B', 'D', 'B'].asMap().entries.map((e) {
                      final colors = [
                        [AppTheme.primary, AppTheme.cyan],
                        [const Color(0xFF8B5CF6), const Color(0xFFA78BFA)],
                        [const Color(0xFF10B981), const Color(0xFF34D399)],
                        [const Color(0xFFF59E0B), const Color(0xFFFBBF24)],
                        [const Color(0xFFEC4899), const Color(0xFFF472B6)],
                      ];
                      return Transform.translate(
                        offset: Offset(e.key * -8.0, 0),
                        child: Container(
                          width: 32, height: 32,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            gradient: LinearGradient(colors: colors[e.key % colors.length]),
                            border: Border.all(color: isDark ? AppTheme.dark : Colors.white, width: 2),
                          ),
                          child: Center(child: Text(e.value,
                              style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w900))),
                        ),
                      );
                    }),
                    const SizedBox(width: 4),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(children: List.generate(5, (_) =>
                            const Icon(Icons.star, size: 14, color: Color(0xFFFBBF24)))),
                        Text('${totalClients + 16}+ clients trust us',
                            style: TextStyle(fontSize: 11, color: Colors.grey[500])),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ),

          // Stats
          Padding(
            padding: const EdgeInsets.all(16),
            child: GridView.count(
              crossAxisCount: 2,
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              crossAxisSpacing: 12,
              mainAxisSpacing: 12,
              childAspectRatio: 1.4,
              children: [
                _statCard('20+', 'Projects Delivered', Icons.rocket_launch, [AppTheme.primary, AppTheme.cyan], isDark),
                _clientBadge(isDark),
                _statCard('4+', 'Years Experience', Icons.calendar_today, [const Color(0xFF10B981), const Color(0xFF34D399)], isDark),
                _statCard('2', 'Office Locations', Icons.location_on, [const Color(0xFFF59E0B), const Color(0xFFFBBF24)], isDark),
              ],
            ),
          ),

          // What You Get
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 8, 16, 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _sectionLabel('Why Woyyuu Tech'),
                const SizedBox(height: 8),
                Text('Great ideas deserve better execution.',
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900,
                        color: isDark ? Colors.white : const Color(0xFF0F172A))),
                const SizedBox(height: 16),
                ...[
                  ['bolt', 'Speed Without Compromise', 'We ship fast without cutting corners on quality.', AppTheme.primary, AppTheme.cyan],
                  ['precision_manufacturing', 'Engineered for Your Problem', 'Every solution is architected around your challenge.', const Color(0xFF8B5CF6), const Color(0xFFA78BFA)],
                  ['groups', 'A Team That Thinks With You', 'We collaborate and co-create with you from day one.', const Color(0xFF10B981), const Color(0xFF34D399)],
                  ['trending_up', 'Built to Scale', 'From MVP to enterprise-grade without rebuilding.', const Color(0xFFF59E0B), const Color(0xFFFBBF24)],
                ].map((item) => _whatYouGetCard(item[0] as String, item[1] as String, item[2] as String,
                    [item[3] as Color, item[4] as Color], isDark)),
              ],
            ),
          ),

          // Testimonials
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _sectionLabel('What Clients Say'),
                const SizedBox(height: 8),
                Text('Trusted by builders & visionaries',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900,
                        color: isDark ? Colors.white : const Color(0xFF0F172A))),
                const SizedBox(height: 16),
                ...[
                  ['Woyyuu Tech delivered our platform faster than any agency — quality was outstanding.', 'Endurance Youth', 'Organization Partner'],
                  ['They don\'t just build software, they understand your business. That\'s rare.', 'PolyTech', 'Academic Partner'],
                  ['From idea to launch in weeks. Sharp, responsive, genuinely invested in your success.', 'Novar Software', 'Technology Partner'],
                ].asMap().entries.map((e) => _testimonialCard(e.value[0], e.value[1], e.value[2], e.key, isDark)),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _sectionLabel(String text) => Row(
    children: [
      Container(width: 8, height: 8, decoration: const BoxDecoration(
        shape: BoxShape.circle,
        gradient: LinearGradient(colors: [AppTheme.primary, AppTheme.cyan]),
      )),
      const SizedBox(width: 8),
      Text(text.toUpperCase(), style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: AppTheme.primary, letterSpacing: 1.2)),
    ],
  );

  Widget _statCard(String value, String label, IconData icon, List<Color> colors, bool isDark) =>
      Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: isDark ? AppTheme.darkCard : Colors.white,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(width: 40, height: 40, decoration: BoxDecoration(
              gradient: LinearGradient(colors: colors),
              borderRadius: BorderRadius.circular(10),
            ), child: Icon(icon, color: Colors.white, size: 20)),
            Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              ShaderMask(
                shaderCallback: (b) => LinearGradient(colors: colors).createShader(b),
                child: Text(value, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w900, color: Colors.white)),
              ),
              Text(label, style: TextStyle(fontSize: 11, color: Colors.grey[500])),
            ]),
          ],
        ),
      );

  Widget _clientBadge(bool isDark) => Container(
    padding: const EdgeInsets.all(16),
    decoration: BoxDecoration(
      color: isDark ? AppTheme.darkCard : Colors.white,
      borderRadius: BorderRadius.circular(16),
      border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
    ),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Row(children: ['G','L','B','D','B'].asMap().entries.map((e) {
          final colors = [[AppTheme.primary, AppTheme.cyan],[const Color(0xFF8B5CF6),const Color(0xFFA78BFA)],[const Color(0xFF10B981),const Color(0xFF34D399)],[const Color(0xFFF59E0B),const Color(0xFFFBBF24)],[const Color(0xFFEC4899),const Color(0xFFF472B6)]];
          return Transform.translate(offset: Offset(e.key * -6.0, 0), child: Container(
            width: 26, height: 26,
            decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: colors[e.key % colors.length]), border: Border.all(color: isDark ? AppTheme.darkCard : Colors.white, width: 1.5)),
            child: Center(child: Text(e.value, style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w900))),
          ));
        }).toList()),
        Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: List.generate(5, (_) => const Icon(Icons.star, size: 12, color: Color(0xFFFBBF24)))),
          Text('${totalClients + 16}+ Happy Clients', style: TextStyle(fontSize: 11, color: Colors.grey[500])),
        ]),
      ],
    ),
  );

  Widget _whatYouGetCard(String icon, String title, String desc, List<Color> colors, bool isDark) =>
      Container(
        margin: const EdgeInsets.only(bottom: 12),
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: isDark ? AppTheme.darkCard : const Color(0xFFF8FAFC),
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
        ),
        child: Row(
          children: [
            Container(width: 44, height: 44, decoration: BoxDecoration(
              gradient: LinearGradient(colors: colors),
              borderRadius: BorderRadius.circular(12),
            ), child: Icon(Icons.bolt, color: Colors.white, size: 22)),
            const SizedBox(width: 14),
            Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(title, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700,
                  color: isDark ? Colors.white : const Color(0xFF0F172A))),
              const SizedBox(height: 4),
              Text(desc, style: TextStyle(fontSize: 12, color: Colors.grey[500], height: 1.4)),
            ])),
          ],
        ),
      );

  Widget _testimonialCard(String quote, String name, String role, int index, bool isDark) {
    final gradients = [
      [AppTheme.primary, AppTheme.cyan],
      [const Color(0xFF8B5CF6), const Color(0xFFA78BFA)],
      [const Color(0xFF10B981), const Color(0xFF34D399)],
    ];
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: isDark ? AppTheme.darkCard : Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        ShaderMask(
          shaderCallback: (b) => LinearGradient(colors: gradients[index % gradients.length]).createShader(b),
          child: const Text('"', style: TextStyle(fontSize: 40, fontWeight: FontWeight.w900, color: Colors.white, height: 1)),
        ),
        Text('"$quote"', style: TextStyle(fontSize: 13, color: isDark ? Colors.grey[300] : Colors.grey[700], height: 1.5)),
        const SizedBox(height: 12),
        Divider(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
        const SizedBox(height: 8),
        Row(children: [
          Container(width: 36, height: 36, decoration: BoxDecoration(
            shape: BoxShape.circle,
            gradient: LinearGradient(colors: gradients[index % gradients.length]),
          ), child: const Center(child: Icon(Icons.person, color: Colors.white, size: 18))),
          const SizedBox(width: 10),
          Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(name, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700,
                color: isDark ? Colors.white : const Color(0xFF0F172A))),
            Text(role, style: TextStyle(fontSize: 11, color: Colors.grey[500])),
          ]),
        ]),
      ]),
    );
  }
}
