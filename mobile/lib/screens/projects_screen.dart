import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class ProjectsScreen extends StatefulWidget {
  const ProjectsScreen({super.key});
  @override
  State<ProjectsScreen> createState() => _ProjectsScreenState();
}

class _ProjectsScreenState extends State<ProjectsScreen> {
  int? hoveredIndex;

  static const projects = [
    {'name': 'Electronics Store', 'category': 'E-Commerce', 'desc': 'A full-featured electronics e-commerce platform with product listings, cart management, and order tracking.', 'image': 'assets/images/electronics.png', 'gradient': [Color(0xFF3B82F6), Color(0xFF06B6D4)]},
    {'name': 'AgriConnect', 'category': 'Agriculture', 'desc': 'A digital platform connecting farmers with buyers, providing real-time market prices and supply chain tracking.', 'image': 'assets/images/agre.png', 'gradient': [Color(0xFF10B981), Color(0xFF34D399)]},
    {'name': 'Bule Hora University', 'category': 'Education', 'desc': 'A university management system handling student enrollment, course scheduling, and grade management.', 'image': 'assets/images/BU.png', 'gradient': [Color(0xFF8B5CF6), Color(0xFFA78BFA)]},
    {'name': 'E-Commerce Platform', 'category': 'E-Commerce', 'desc': 'A scalable multi-vendor e-commerce solution with payment integration and real-time order notifications.', 'image': 'assets/images/ecoemrce1.png', 'gradient': [Color(0xFFF59E0B), Color(0xFFFBBF24)]},
    {'name': 'Finance Manager', 'category': 'FinTech', 'desc': 'A personal and business finance management app with expense tracking and financial analytics dashboard.', 'image': 'assets/images/Finance.png', 'gradient': [Color(0xFF10B981), Color(0xFF34D399)]},
    {'name': 'High School System', 'category': 'Education', 'desc': 'A comprehensive school management platform covering student records, attendance, and exam results.', 'image': 'assets/images/highchool.png', 'gradient': [Color(0xFF3B82F6), Color(0xFF06B6D4)]},
    {'name': 'HiTech Electronics', 'category': 'E-Commerce', 'desc': 'An electronics retail platform featuring product catalog, sales management, and point-of-sale system.', 'image': 'assets/images/HItech.png', 'gradient': [Color(0xFFEC4899), Color(0xFFF472B6)]},
    {'name': 'Hospital Management', 'category': 'Healthcare', 'desc': 'A hospital information system managing patient records, appointments, pharmacy, and billing.', 'image': 'assets/images/hospital.png', 'gradient': [Color(0xFFEF4444), Color(0xFFF97316)]},
    {'name': 'HUFMS', 'category': 'Fleet Management', 'desc': 'Haramaya University Fleet Management System — managing vehicles, drivers, trips, and fuel consumption.', 'image': 'assets/images/HUFMS.png', 'gradient': [Color(0xFF6366F1), Color(0xFF8B5CF6)]},
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
            const Text('OUR WORK', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700,
                color: AppTheme.primary, letterSpacing: 1.2)),
          ]),
          const SizedBox(height: 8),
          Text('Projects', style: TextStyle(fontSize: 36, fontWeight: FontWeight.w900,
              color: isDark ? Colors.white : const Color(0xFF0F172A))),
          const SizedBox(height: 8),
          Text('Real problems, real solutions, real impact.',
              style: TextStyle(fontSize: 14, color: Colors.grey[500])),
          const SizedBox(height: 24),
          ...projects.asMap().entries.map((e) => _projectCard(e.value, e.key, isDark)),
        ],
      ),
    );
  }

  Widget _projectCard(Map<String, dynamic> project, int index, bool isDark) {
    final colors = project['gradient'] as List<Color>;
    return GestureDetector(
      onTapDown: (_) => setState(() => hoveredIndex = index),
      onTapUp: (_) => setState(() => hoveredIndex = null),
      onTapCancel: () => setState(() => hoveredIndex = null),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        margin: const EdgeInsets.only(bottom: 16),
        transform: Matrix4.translationValues(0, hoveredIndex == index ? -4 : 0, 0),
        decoration: BoxDecoration(
          color: isDark ? AppTheme.darkCard : Colors.white,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
          boxShadow: hoveredIndex == index ? [BoxShadow(color: colors[0].withOpacity(0.2), blurRadius: 20, spreadRadius: 2)] : [],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Image with overlay
            ClipRRect(
              borderRadius: const BorderRadius.vertical(top: Radius.circular(20)),
              child: Stack(
                children: [
                  Container(
                    height: 180,
                    width: double.infinity,
                    decoration: BoxDecoration(gradient: LinearGradient(colors: [colors[0].withOpacity(0.3), colors[1].withOpacity(0.3)])),
                    child: Image.asset(project['image'] as String, fit: BoxFit.cover,
                        errorBuilder: (_, __, ___) => Container(
                          decoration: BoxDecoration(gradient: LinearGradient(colors: colors)),
                          child: Center(child: Icon(Icons.image, color: Colors.white.withOpacity(0.5), size: 48)),
                        )),
                  ),
                  // Category badge
                  Positioned(top: 12, left: 12, child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(color: Colors.black54, borderRadius: BorderRadius.circular(20)),
                    child: Text(project['category'] as String,
                        style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w600)),
                  )),
                  // Live badge
                  Positioned(top: 12, right: 12, child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(color: const Color(0xFF10B981), borderRadius: BorderRadius.circular(20)),
                    child: Row(mainAxisSize: MainAxisSize.min, children: [
                      Container(width: 6, height: 6, decoration: const BoxDecoration(shape: BoxShape.circle, color: Colors.white)),
                      const SizedBox(width: 4),
                      const Text('Live', style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w700)),
                    ]),
                  )),
                ],
              ),
            ),
            // Content
            Padding(
              padding: const EdgeInsets.all(16),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                // Accent line
                AnimatedContainer(
                  duration: const Duration(milliseconds: 400),
                  height: 3,
                  width: hoveredIndex == index ? double.infinity : 0,
                  decoration: BoxDecoration(gradient: LinearGradient(colors: colors), borderRadius: BorderRadius.circular(2)),
                ),
                const SizedBox(height: 10),
                Row(children: [
                  Container(width: 36, height: 36, decoration: BoxDecoration(
                    gradient: LinearGradient(colors: colors), borderRadius: BorderRadius.circular(10)),
                    child: const Icon(Icons.devices, color: Colors.white, size: 18)),
                  const SizedBox(width: 10),
                  Text(project['name'] as String, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w800,
                      color: isDark ? Colors.white : const Color(0xFF0F172A))),
                ]),
                const SizedBox(height: 8),
                Text(project['desc'] as String, style: TextStyle(fontSize: 13, color: Colors.grey[500], height: 1.5)),
              ]),
            ),
          ],
        ),
      ),
    );
  }
}
