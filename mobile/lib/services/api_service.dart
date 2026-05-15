import 'dart:convert';
import 'package:http/http.dart' as http;

const String baseUrl = 'https://woyyuu-tech.onrender.com/api';

class ApiService {
  static Future<Map<String, dynamic>?> getPublicStats() async {
    try {
      final res = await http.get(Uri.parse('$baseUrl/stats/public'));
      if (res.statusCode == 200) return jsonDecode(res.body);
    } catch (_) {}
    return null;
  }

  static Future<bool> submitContact({
    required String name,
    required String email,
    String? phone,
    String? organization,
    String? inquiryType,
    required String message,
  }) async {
    try {
      final res = await http.post(
        Uri.parse('$baseUrl/contact'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'name': name,
          'email': email,
          'phone': phone,
          'organization': organization,
          'inquiryType': inquiryType,
          'message': message,
        }),
      );
      return res.statusCode == 201;
    } catch (_) {
      return false;
    }
  }

  static Future<bool> subscribe(String email) async {
    try {
      final res = await http.post(
        Uri.parse('$baseUrl/subscribe'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'email': email}),
      );
      return res.statusCode == 201 || res.statusCode == 200;
    } catch (_) {
      return false;
    }
  }
}
