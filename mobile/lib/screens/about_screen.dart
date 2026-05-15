import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 16),
          _sectionLabel('Who We Are'),
          const SizedBox(height: 8),
          RichText(text: TextSpan(children: [
            TextSpan(text: 'Our ', style: TextStyle(fontSize: 32, fontWeight: FontWeight.w900,
                color: isDark ? Colors.white : const Color(0xFF0F172A))),
            const TextSpan(text: 'Story', style: TextStyle(fontSize: 32, fontWeight: FontWeight.w900,
                foreground: Paint()..shader = LinearGradient(colors: [AppTheme.primary, AppTheme.cyan])
                    .createShader(Rect.fromLTWH(0, 0, 120, 40)))),
          ])),
          const SizedBox(height: 12),
          Text('LemiTech is a software development studio. We design and build custom web platforms, mobile applications, and digital products that help businesses grow, scale, and compete in the World market.',
              style: TextStyle(fontSize: 14, height: 1.6, color: isDark ? Colors.grey[400] : Colors.grey[600])),
          const SizedBox(height: 8),
          Text('Founded by a team of passionate engineers and creatives, we combine deep technical expertise with a genuine understanding of the World market — delivering solutions that are not just functional, but transformative.',
              style: TextStyle(fontSize: 14, height: 1.6, color: isDark ? Colors.grey[400] : Colors.grey[600])),
          const SizedBox(height: 24),

          // Stats
          Row(children: [
            _miniStat('4+', 'Years Experience', isDark),
            const SizedBox(width: 12),
            _miniStat('20+', 'Projects Delivered', isDark),
            const SizedBox(width: 12),
            _miniStat('2', 'Office Locations', isDark),
          ]),
          const SizedBox(height: 32),

          // Core Values
          _sectionLabel('What Drives Us'),
          const SizedBox(height: 8),
          RichText(text: TextSpan(children: [
            TextSpan(text: 'Core ', style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900,
                color: isDark ? Colors.white : const Color(0xFF0F172A))),
            const TextSpan(text: 'Values', style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900,
                foreground: Paint()..shader = LinearGradient(colors: [AppTheme.primary, AppTheme.cyan])
                    .createShader(Rect.fromLTWH(0, 0, 100, 30)))),
          ])),
          const SizedBox(height: 16),
          GridView.count(
            crossAxisCount: 2, shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
            crossAxisSpacing: 12, mainAxisSpacing: 12, childAspectRatio: 1.1,
            children: [
              _valueCard('Scalability First', 'Designing systems that grow seamlessly.', Icons.storage, [AppTheme.primary, AppTheme.cyan], isDark),
              _valueCard('User-Centric', 'Prioritizing UX in every decision.', Icons.group, [const Color(0xFF8B5CF6), const Color(0xFFA78BFA)], isDark),
              _valueCard('Clean Code', 'Writing maintainable, efficient logic.', Icons.code, [const Color(0xFF10B981), const Color(0xFF34D399)], isDark),
              _valueCard('Security Focused', 'Embedding security from line one.', Icons.lock, [const Color(0xFFF59E0B), const Color(0xFFFBBF24)], isDark),
            ],
          ),
          const SizedBox(height: 32),

          // Team
          _sectionLabel('The People'),
          const SizedBox(height: 8),
          RichText(text: TextSpan(children: [
            TextSpan(text: 'Our ', style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900,
                color: isDark ? Colors.white : const Color(0xFF0F172A))),
            const TextSpan(text: 'Team', style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900,
                foreground: Paint()..shader = LinearGradient(colors: [AppTheme.primary, AppTheme.cyan])
                    .createShader(Rect.fromLTWH(0, 0, 80, 30)))),
          ])),
          const SizedBox(height: 16),
          GridView.count(
            crossAxisCount: 2, shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
            crossAxisSpacing: 12, mainAxisSpacing: 12, childAspectRatio: 0.85,
            children: [
              _teamCard('Lemesa Girma', 'Co-Founder & CEO', 'Strategic leader and Engineering Lead.', 'tlemesagirma@gmail.com', [AppTheme.primary, AppTheme.cyan], 'CEO', isDark),
              _teamCard('Bruk Hayal', 'Co-Founder', 'Passionate builder driving innovation.', '', [const Color(0xFF8B5CF6), const Color(0xFFA78BFA)], null, isDark),
              _teamCard('Kasawun Tesfaye', 'Lead Developer', 'Full-stack engineer crafting scalable products.', '', [const Color(0xFF10B981), const Color(0xFF34D399)], null, isDark),
              _teamCard('Bezawit Tadese', 'Designer', 'Creative mind behind every pixel.', '', [const Color(0xFFF59E0B), const Color(0xFFFBBF24)], null, isDark),
            ],
          ),
          const SizedBox(height: 24),
        ],
      ),
    );
  }

  Widget _sectionLabel(String text) => Row(children: [
    Container(width: 8, height: 8, decoration: const BoxDecoration(shape: BoxShape.circle,
        gradient: LinearGradient(colors: [AppTheme.primary, AppTheme.cyan]))),
    const SizedBox(width: 8),
    Text(text.toUpperCase(), style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700,
        color: AppTheme.primary, letterSpacing: 1.2)),
  ]);

  Widget _miniStat(String value, String label, bool isDark) => Expanded(child: Container(
    padding: const EdgeInsets.all(12),
    decoration: BoxDecoration(
      color: isDark ? AppTheme.darkCard : Colors.white,
      borderRadius: BorderRadius.circular(12),
      border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
    ),
    child: Column(children: [
      ShaderMask(shaderCallback: (b) => const LinearGradient(colors: [AppTheme.primary, AppTheme.cyan]).createShader(b),
          child: Text(value, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: Colors.white))),
      Text(label, style: TextStyle(fontSize: 10, color: Colors.grey[500]), textAlign: TextAlign.center),
    ]),
  ));

  Widget _valueCard(String title, String desc, IconData icon, List<Color> colors, bool isDark) =>
      Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: isDark ? AppTheme.darkCard : Colors.white,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Container(width: 40, height: 40, decoration: BoxDecoration(
            gradient: LinearGradient(colors: colors), borderRadius: BorderRadius.circular(10)),
            child: Icon(icon, color: Colors.white, size: 20)),
          const SizedBox(height: 10),
          Text(title, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700,
              color: isDark ? Colors.white : const Color(0xFF0F172A))),
          const SizedBox(height: 4),
          Text(desc, style: TextStyle(fontSize: 11, color: Colors.grey[500], height: 1.4)),
        ]),
      );

  Widget _teamCard(String name, String role, String bio, String email, List<Color> colors, String? badge, bool isDark) =>
      Container(
        decoration: BoxDecoration(
          color: isDark ? AppTheme.darkCard : Colors.white,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
        ),
        child: Column(children: [
          Container(height: 60, decoration: BoxDecoration(
            gradient: LinearGradient(colors: colors),
            borderRadius: const BorderRadius.vertical(top: Radius.circular(16)),
          )),
          Transform.translate(
            offset: const Offset(0, -24),
            child: Stack(alignment: Alignment.bottomCenter, children: [
              Container(width: 48, height: 48, decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: LinearGradient(colors: colors),
                border: Border.all(color: isDark ? AppTheme.darkCard : Colors.white, width: 3),
              ), child: const Icon(Icons.person, color: Colors.white, size: 24)),
              if (badge != null) Positioned(bottom: 0, child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                decoration: BoxDecoration(gradient: LinearGradient(colors: colors), borderRadius: BorderRadius.circular(8)),
                child: Text(badge, style: const TextStyle(color: Colors.white, fontSize: 8, fontWeight: FontWeight.w900)),
              )),
            ]),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(10, 0, 10, 12),
            child: Column(children: [
              Text(name, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w800,
                  color: isDark ? Colors.white : const Color(0xFF0F172A)), textAlign: TextAlign.center),
              const SizedBox(height: 4),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(gradient: LinearGradient(colors: colors), borderRadius: BorderRadius.circular(8)),
                child: Text(role, style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w700)),
              ),
              const SizedBox(height: 6),
              Text(bio, style: TextStyle(fontSize: 10, color: Colors.grey[500], height: 1.4), textAlign: TextAlign.center),
            ]),
          ),
        ]),
      );
}
