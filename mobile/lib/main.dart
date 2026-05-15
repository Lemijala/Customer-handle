import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'theme/app_theme.dart';
import 'screens/home_screen.dart';
import 'screens/about_screen.dart';
import 'screens/experience_screen.dart';
import 'screens/projects_screen.dart';
import 'screens/services_screen.dart';
import 'screens/contact_screen.dart';
import 'widgets/bottom_nav.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
  runApp(const WoyyuuTechApp());
}

class WoyyuuTechApp extends StatefulWidget {
  const WoyyuuTechApp({super.key});
  @override
  State<WoyyuuTechApp> createState() => _WoyyuuTechAppState();
}

class _WoyyuuTechAppState extends State<WoyyuuTechApp> {
  ThemeMode _themeMode = ThemeMode.dark;

  void _toggleTheme() => setState(() =>
      _themeMode = _themeMode == ThemeMode.dark ? ThemeMode.light : ThemeMode.dark);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Woyyuu Tech',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: _themeMode,
      home: MainShell(onToggleTheme: _toggleTheme, themeMode: _themeMode),
    );
  }
}

class MainShell extends StatefulWidget {
  final VoidCallback onToggleTheme;
  final ThemeMode themeMode;
  const MainShell({super.key, required this.onToggleTheme, required this.themeMode});
  @override
  State<MainShell> createState() => _MainShellState();
}

class _MainShellState extends State<MainShell> {
  int _currentIndex = 0;

  final _screens = const [
    HomeScreen(),
    AboutScreen(),
    ExperienceScreen(),
    ProjectsScreen(),
    ServicesScreen(),
    ContactScreen(),
  ];

  final _titles = ['Home', 'About', 'Experience', 'Projects', 'Services', 'Contact'];

  @override
  Widget build(BuildContext context) {
    final isDark = widget.themeMode == ThemeMode.dark;
    return Scaffold(
      appBar: AppBar(
        title: Row(children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(8),
            child: Image.asset('assets/images/logo.png', width: 32, height: 32,
                errorBuilder: (_, __, ___) => Container(
                  width: 32, height: 32,
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(colors: [AppTheme.primary, AppTheme.cyan]),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: const Center(child: Text('W', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900))),
                )),
          ),
          const SizedBox(width: 10),
          Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Woyyuu Tech', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900)),
            Text(_titles[_currentIndex], style: TextStyle(fontSize: 11, color: Colors.grey[500])),
          ]),
        ]),
        actions: [
          IconButton(
            icon: Icon(isDark ? Icons.light_mode_outlined : Icons.dark_mode_outlined),
            onPressed: widget.onToggleTheme,
          ),
        ],
      ),
      body: IndexedStack(index: _currentIndex, children: _screens),
      bottomNavigationBar: BottomNav(
        currentIndex: _currentIndex,
        onTap: (i) => setState(() => _currentIndex = i),
      ),
    );
  }
}
