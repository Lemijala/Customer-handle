import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class ServicesScreen extends StatelessWidget {
  const ServicesScreen({super.key});

  static const services = [
    {'title': 'Web Development', 'desc': 'We build fast, scalable, and modern web platforms tailored to your business. From landing pages to full enterprise systems.', 'icon': Icons.web, 'features': ['React / Next.js', 'Node.js & REST APIs', 'Database Design', 'Cloud Deployment'], 'colors': [Color(0xFF3B82F6), Color(0xFF06B6D4)]},
    {'title': 'Mobile App Development', 'desc': 'Cross-platform mobile apps built with Flutter and React Native. Smooth, native-feeling experiences for iOS and Android.', 'icon': Icons.phone_iphone, 'features': ['Flutter & Dart', 'React Native', 'iOS & Android', 'Push Notifications'], 'colors': [Color(0xFF8B5CF6), Color(0xFFA78BFA)]},
    {'title': 'UI/UX Design', 'desc': 'User-centered design that converts. We craft intuitive interfaces, design systems, and prototypes.', 'icon': Icons.palette, 'features': ['Figma Prototypes', 'Design Systems', 'User Research', 'Responsive Design'], 'colors': [Color(0xFFEC4899), Color(0xFFF472B6)]},
    {'title': 'Backend & API Development', 'desc': 'Robust server-side systems, microservices, and API integrations. Secure, fast, and scalable.', 'icon': Icons.dns, 'features': ['REST & GraphQL APIs', 'Microservices', 'Authentication', 'Third-party Integrations'], 'colors': [Color(0xFF10B981), Color(0xFF34D399)]},
    {'title': 'Cloud & DevOps', 'desc': 'We set up and manage your cloud infrastructure, CI/CD pipelines, and deployment workflows.', 'icon': Icons.cloud, 'features': ['AWS / Firebase', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring & Alerts'], 'colors': [Color(0xFFF59E0B), Color(0xFFFBBF24)]},
    {'title': 'Technical Consulting', 'desc': 'We help you plan your architecture, choose the right tech stack, and build a roadmap that fits your budget.', 'icon': Icons.lightbulb, 'features': ['Architecture Review', 'Tech Stack Advice', 'Project Roadmap', 'Code Audit'], 'colors': [Color(0xFF6366F1), Color(0xFF8B5CF6)]},
    {'title': 'Mentorship', 'desc': 'We guide developers and entrepreneurs through their journey — from learning to build, to launching real products.', 'icon': Icons.school, 'features': ['1-on-1 Sessions', 'Code Reviews', 'Career Guidance', 'Project Support'], 'colors': [Color(0xFF06B6D4), Color(0xFF3B82F6)]},
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
            const Text('WHAT WE OFFER', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700,
                color: AppTheme.primary, letterSpacing: 1.2)),
          ]),
          const SizedBox(height: 8),
          RichText(text: TextSpan(children: [
            TextSpan(text: 'Our ', style: TextStyle(fontSize: 32, fontWeight: FontWeight.w900,
                color: isDark ? Colors.white : const Color(0xFF0F172A))),
            const TextSpan(text: 'Services', style: TextStyle(fontSize: 32, fontWeight: FontWeight.w900,
                foreground: Paint()..shader = LinearGradient(colors: [AppTheme.primary, AppTheme.cyan])
                    .createShader(Rect.fromLTWH(0, 0, 140, 40)))),
          ])),
          const SizedBox(height: 8),
          Text('From idea to launch — we cover every layer of your digital product.',
              style: TextStyle(fontSize: 14, color: Colors.grey[500])),
          const SizedBox(height: 24),
          ...services.asMap().entries.map((e) => _serviceCard(e.value, e.key, isDark)),
          const SizedBox(height: 16),
          // CTA
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(24),
            decoration: BoxDecoration(
              gradient: const LinearGradient(colors: [Color(0xFF2563EB), AppTheme.primary, AppTheme.cyan]),
              borderRadius: BorderRadius.circular(20),
            ),
            child: Column(children: [
              const Text('Ready to build something great?',
                  style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900),
                  textAlign: TextAlign.center),
              const SizedBox(height: 8),
              Text('Tell us what you need and we\'ll get back to you within 24 hours.',
                  style: TextStyle(color: Colors.white.withOpacity(0.8), fontSize: 13),
                  textAlign: TextAlign.center),
              const SizedBox(height: 16),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(24)),
                child: const Row(mainAxisSize: MainAxisSize.min, children: [
                  Icon(Icons.mail, color: AppTheme.primary, size: 18),
                  SizedBox(width: 8),
                  Text('Get in Touch', style: TextStyle(color: AppTheme.primary, fontWeight: FontWeight.w900, fontSize: 14)),
                ]),
              ),
            ]),
          ),
          const SizedBox(height: 24),
        ],
      ),
    );
  }

  Widget _serviceCard(Map<String, dynamic> service, int index, bool isDark) {
    final colors = service['colors'] as List<Color>;
    final features = service['features'] as List<String>;
    final isLeft = index % 2 == 0;
    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (!isLeft) ...[
            Expanded(child: _serviceText(service, colors, features, isDark)),
            const SizedBox(width: 16),
            _serviceIcon(service, colors),
          ] else ...[
            _serviceIcon(service, colors),
            const SizedBox(width: 16),
            Expanded(child: _serviceText(service, colors, features, isDark)),
          ],
        ],
      ),
    );
  }

  Widget _serviceIcon(Map<String, dynamic> service, List<Color> colors) =>
      Container(
        width: 80, height: 80,
        decoration: BoxDecoration(gradient: LinearGradient(colors: colors), borderRadius: BorderRadius.circular(20),
            boxShadow: [BoxShadow(color: colors[0].withOpacity(0.3), blurRadius: 12, spreadRadius: 2)]),
        child: Icon(service['icon'] as IconData, color: Colors.white, size: 36),
      );

  Widget _serviceText(Map<String, dynamic> service, List<Color> colors, List<String> features, bool isDark) =>
      Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Container(width: 32, height: 3, decoration: BoxDecoration(
            gradient: LinearGradient(colors: colors), borderRadius: BorderRadius.circular(2))),
        const SizedBox(height: 8),
        Text(service['title'] as String, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w800,
            color: isDark ? Colors.white : const Color(0xFF0F172A))),
        const SizedBox(height: 6),
        Text(service['desc'] as String, style: TextStyle(fontSize: 12, color: Colors.grey[500], height: 1.5)),
        const SizedBox(height: 8),
        Wrap(spacing: 6, runSpacing: 4, children: features.map((f) => Container(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
          decoration: BoxDecoration(
            color: colors[0].withOpacity(0.1),
            borderRadius: BorderRadius.circular(8),
            border: Border.all(color: colors[0].withOpacity(0.3)),
          ),
          child: Text(f, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w600, color: colors[0])),
        )).toList()),
      ]);
}
