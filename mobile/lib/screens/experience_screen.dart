import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class ExperienceScreen extends StatelessWidget {
  const ExperienceScreen({super.key});

  static const roadmap = [
    {'year': '2021', 'title': 'The Foundation', 'subtitle': 'Where it all began', 'desc': 'Started building with core web technologies. Laid the groundwork in frontend development and UI design, delivering first client projects.', 'tags': ['HTML/CSS', 'JavaScript', 'React', 'Figma', 'Java'], 'milestone': 'Company Founded', 'icon': Icons.rocket_launch, 'colors': [Color(0xFF3B82F6), Color(0xFF06B6D4)]},
    {'year': '2022', 'title': 'Going Full-Stack', 'subtitle': 'Backend & APIs', 'desc': 'Expanded into server-side development. Built REST APIs, integrated databases, and started delivering end-to-end web platforms.', 'tags': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Go'], 'milestone': 'First Enterprise Client', 'icon': Icons.dns, 'colors': [Color(0xFF8B5CF6), Color(0xFFA78BFA)]},
    {'year': '2023', 'title': 'Cloud & Scale', 'subtitle': 'Infrastructure & DevOps', 'desc': 'Adopted cloud-first architecture. Deployed production systems on AWS, containerized apps with Docker, and introduced CI/CD pipelines.', 'tags': ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Go'], 'milestone': '10+ Projects Delivered', 'icon': Icons.cloud, 'colors': [Color(0xFF10B981), Color(0xFF34D399)]},
    {'year': '2024', 'title': 'Mobile & AI', 'subtitle': 'Expanding capabilities', 'desc': 'Launched mobile application development with Flutter and Dart, integrated AI-powered features, and graduated with B.Sc. in IT.', 'tags': ['Flutter', 'Dart', 'React Native', 'Python', 'Firebase'], 'milestone': 'Mobile Division Launched', 'icon': Icons.phone_iphone, 'colors': [Color(0xFFF59E0B), Color(0xFFFBBF24)]},
    {'year': '2025–Now', 'title': 'Studio at Scale', 'subtitle': 'Growing Woyyuu Tech', 'desc': 'Operating as a full-service software studio across web, mobile, and backend. Building complex platforms with a growing team.', 'tags': ['Next.js', 'Go', 'Flutter', 'Dart', 'Java', 'TypeScript'], 'milestone': '20+ Projects & Growing', 'icon': Icons.groups, 'colors': [Color(0xFFEC4899), Color(0xFFF472B6)]},
  ];

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 16),
          Row(children: [
            Container(width: 8, height: 8, decoration: const BoxDecoration(shape: BoxShape.circle,
                gradient: LinearGradient(colors: [AppTheme.primary, AppTheme.cyan]))),
            const SizedBox(width: 8),
            const Text('OUR JOURNEY', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700,
                color: AppTheme.primary, letterSpacing: 1.2)),
          ]),
          const SizedBox(height: 8),
          RichText(text: TextSpan(children: [
            TextSpan(text: 'Experience & ', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900,
                color: isDark ? Colors.white : const Color(0xFF0F172A))),
            const TextSpan(text: 'Growth', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900,
                foreground: Paint()..shader = LinearGradient(colors: [AppTheme.primary, AppTheme.cyan])
                    .createShader(Rect.fromLTWH(0, 0, 120, 35)))),
          ])),
          const SizedBox(height: 8),
          Text('Four years of building, shipping, and scaling.',
              style: TextStyle(fontSize: 14, color: Colors.grey[500])),
          const SizedBox(height: 32),

          // Timeline
          ...roadmap.asMap().entries.map((e) {
            final step = e.value;
            final colors = step['colors'] as List<Color>;
            final tags = step['tags'] as List<String>;
            return _timelineItem(step['year'] as String, step['title'] as String,
                step['subtitle'] as String, step['desc'] as String, tags,
                step['milestone'] as String, step['icon'] as IconData, colors, isDark, e.key == roadmap.length - 1);
          }),
        ],
      ),
    );
  }

  Widget _timelineItem(String year, String title, String subtitle, String desc,
      List<String> tags, String milestone, IconData icon, List<Color> colors, bool isDark, bool isLast) =>
      IntrinsicHeight(
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Left: line + node
            Column(children: [
              Container(width: 44, height: 44, decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: LinearGradient(colors: colors),
                border: Border.all(color: isDark ? AppTheme.dark : Colors.white, width: 3),
                boxShadow: [BoxShadow(color: colors[0].withOpacity(0.3), blurRadius: 8, spreadRadius: 2)],
              ), child: Icon(icon, color: Colors.white, size: 22)),
              if (!isLast) Expanded(child: Container(width: 2,
                  decoration: BoxDecoration(gradient: LinearGradient(
                      begin: Alignment.topCenter, end: Alignment.bottomCenter,
                      colors: [colors[0].withOpacity(0.5), colors[0].withOpacity(0.1)])))),
            ]),
            const SizedBox(width: 16),
            // Right: card
            Expanded(child: Padding(
              padding: const EdgeInsets.only(bottom: 24),
              child: Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: isDark ? AppTheme.darkCard : Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
                ),
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Row(children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                      decoration: BoxDecoration(gradient: LinearGradient(colors: colors), borderRadius: BorderRadius.circular(8)),
                      child: Row(mainAxisSize: MainAxisSize.min, children: [
                        const Icon(Icons.emoji_events, color: Colors.white, size: 11),
                        const SizedBox(width: 4),
                        Text(milestone, style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w700)),
                      ]),
                    ),
                  ]),
                  const SizedBox(height: 8),
                  ShaderMask(shaderCallback: (b) => LinearGradient(colors: colors).createShader(b),
                      child: Text(year, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w900,
                          color: Colors.white, letterSpacing: 1))),
                  Text(title, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900,
                      color: isDark ? Colors.white : const Color(0xFF0F172A))),
                  Text(subtitle, style: TextStyle(fontSize: 12, color: Colors.grey[500])),
                  const SizedBox(height: 8),
                  Text(desc, style: TextStyle(fontSize: 12, color: isDark ? Colors.grey[400] : Colors.grey[600], height: 1.5)),
                  const SizedBox(height: 10),
                  Wrap(spacing: 6, runSpacing: 6, children: tags.map((t) => Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: isDark ? AppTheme.dark : const Color(0xFFF1F5F9),
                      borderRadius: BorderRadius.circular(8),
                      border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
                    ),
                    child: Text(t, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w600,
                        color: isDark ? Colors.grey[300] : Colors.grey[600])),
                  )).toList()),
                ]),
              ),
            )),
          ],
        ),
      );
}
