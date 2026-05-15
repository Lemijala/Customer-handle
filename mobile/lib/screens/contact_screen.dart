import 'package:flutter/material.dart';
import '../services/api_service.dart';
import '../theme/app_theme.dart';

class ContactScreen extends StatefulWidget {
  const ContactScreen({super.key});
  @override
  State<ContactScreen> createState() => _ContactScreenState();
}

class _ContactScreenState extends State<ContactScreen> {
  final _formKey = GlobalKey<FormState>();
  final _name = TextEditingController();
  final _email = TextEditingController();
  final _phone = TextEditingController();
  final _org = TextEditingController();
  final _message = TextEditingController();
  String _inquiryType = '';
  bool _loading = false;
  bool _success = false;

  final _inquiryTypes = ['Technical Consulting', 'Full-time Opportunity', 'Speaking Engagement', 'Mentorship'];

  Future<void> _submit() async {
    if (!_formKey.currentState!.validate()) return;
    setState(() => _loading = true);
    final ok = await ApiService.submitContact(
      name: _name.text, email: _email.text, phone: _phone.text,
      organization: _org.text, inquiryType: _inquiryType, message: _message.text,
    );
    setState(() { _loading = false; _success = ok; });
    if (ok) {
      _name.clear(); _email.clear(); _phone.clear(); _org.clear(); _message.clear();
      setState(() => _inquiryType = '');
      await Future.delayed(const Duration(seconds: 4));
      if (mounted) setState(() => _success = false);
    }
  }

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
            const Text('GET IN TOUCH', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700,
                color: AppTheme.primary, letterSpacing: 1.2)),
          ]),
          const SizedBox(height: 8),
          Text('Contact Us', style: TextStyle(fontSize: 32, fontWeight: FontWeight.w900,
              color: isDark ? Colors.white : const Color(0xFF0F172A))),
          const SizedBox(height: 8),
          Text('Have a project in mind? Let\'s talk about it.',
              style: TextStyle(fontSize: 14, color: Colors.grey[500])),
          const SizedBox(height: 24),

          // Contact info
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: isDark ? AppTheme.darkCard : Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
            ),
            child: Column(children: [
              _infoRow(Icons.location_on, 'Addis Ababa, Ethiopia', isDark),
              const SizedBox(height: 12),
              _infoRow(Icons.location_on_outlined, 'Bule Hora, Ethiopia (Branch)', isDark),
              const SizedBox(height: 12),
              _infoRow(Icons.mail_outline, 'tlemesagirma@gmail.com', isDark),
              const SizedBox(height: 12),
              _infoRow(Icons.phone_outlined, '+251 914 625 479', isDark),
            ]),
          ),
          const SizedBox(height: 24),

          // Form
          if (_success)
            Container(
              padding: const EdgeInsets.all(16),
              margin: const EdgeInsets.only(bottom: 16),
              decoration: BoxDecoration(
                color: const Color(0xFF10B981),
                borderRadius: BorderRadius.circular(12),
              ),
              child: const Row(children: [
                Icon(Icons.check_circle, color: Colors.white),
                SizedBox(width: 10),
                Expanded(child: Text('Message received! We\'ll get back to you within 24 hours.',
                    style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600))),
              ]),
            ),

          Form(
            key: _formKey,
            child: Column(children: [
              Row(children: [
                Expanded(child: _field(_name, 'Name', Icons.person_outline, isDark, required: true)),
                const SizedBox(width: 12),
                Expanded(child: _field(_email, 'Work Email', Icons.mail_outline, isDark, required: true, type: TextInputType.emailAddress)),
              ]),
              const SizedBox(height: 12),
              Row(children: [
                Expanded(child: _field(_phone, 'Phone Number', Icons.phone_outlined, isDark, type: TextInputType.phone)),
                const SizedBox(width: 12),
                Expanded(child: _field(_org, 'Organization', Icons.business_outlined, isDark)),
              ]),
              const SizedBox(height: 12),
              // Inquiry type
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 14),
                decoration: BoxDecoration(
                  color: isDark ? AppTheme.darkCard : const Color(0xFFF8FAFC),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
                ),
                child: DropdownButtonHideUnderline(
                  child: DropdownButton<String>(
                    value: _inquiryType.isEmpty ? null : _inquiryType,
                    hint: Text('Select inquiry type...', style: TextStyle(color: Colors.grey[400], fontSize: 14)),
                    isExpanded: true,
                    dropdownColor: isDark ? AppTheme.darkCard : Colors.white,
                    items: _inquiryTypes.map((t) => DropdownMenuItem(value: t,
                        child: Text(t, style: TextStyle(fontSize: 14, color: isDark ? Colors.white : Colors.black87)))).toList(),
                    onChanged: (v) => setState(() => _inquiryType = v ?? ''),
                  ),
                ),
              ),
              const SizedBox(height: 12),
              // Message
              Container(
                decoration: BoxDecoration(
                  color: isDark ? AppTheme.darkCard : const Color(0xFFF8FAFC),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
                ),
                child: TextFormField(
                  controller: _message,
                  maxLines: 5,
                  validator: (v) => v == null || v.isEmpty ? 'Required' : null,
                  style: TextStyle(fontSize: 14, color: isDark ? Colors.white : Colors.black87),
                  decoration: InputDecoration(
                    hintText: 'Tell us about your project needs, timeline, and tech stack...',
                    hintStyle: TextStyle(color: Colors.grey[400], fontSize: 13),
                    border: InputBorder.none,
                    contentPadding: const EdgeInsets.all(14),
                  ),
                ),
              ),
              const SizedBox(height: 20),
              SizedBox(
                width: double.infinity,
                height: 52,
                child: ElevatedButton(
                  onPressed: _loading ? null : _submit,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.transparent,
                    shadowColor: Colors.transparent,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                    padding: EdgeInsets.zero,
                  ),
                  child: Ink(
                    decoration: BoxDecoration(
                      gradient: const LinearGradient(colors: [AppTheme.primary, AppTheme.cyan]),
                      borderRadius: BorderRadius.circular(14),
                    ),
                    child: Center(child: _loading
                        ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2))
                        : const Row(mainAxisSize: MainAxisSize.min, children: [
                            Icon(Icons.send, color: Colors.white, size: 18),
                            SizedBox(width: 8),
                            Text('Send Message', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
                          ])),
                  ),
                ),
              ),
              const SizedBox(height: 24),
            ]),
          ),
        ],
      ),
    );
  }

  Widget _infoRow(IconData icon, String text, bool isDark) => Row(children: [
    Icon(icon, size: 18, color: AppTheme.primary),
    const SizedBox(width: 10),
    Text(text, style: TextStyle(fontSize: 13, color: isDark ? Colors.grey[300] : Colors.grey[700])),
  ]);

  Widget _field(TextEditingController ctrl, String hint, IconData icon, bool isDark,
      {bool required = false, TextInputType type = TextInputType.text}) =>
      Container(
        decoration: BoxDecoration(
          color: isDark ? AppTheme.darkCard : const Color(0xFFF8FAFC),
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: isDark ? AppTheme.darkBorder : const Color(0xFFE2E8F0)),
        ),
        child: TextFormField(
          controller: ctrl,
          keyboardType: type,
          validator: required ? (v) => v == null || v.isEmpty ? 'Required' : null : null,
          style: TextStyle(fontSize: 14, color: isDark ? Colors.white : Colors.black87),
          decoration: InputDecoration(
            hintText: hint,
            hintStyle: TextStyle(color: Colors.grey[400], fontSize: 13),
            prefixIcon: Icon(icon, size: 18, color: Colors.grey[400]),
            border: InputBorder.none,
            contentPadding: const EdgeInsets.symmetric(vertical: 14),
          ),
        ),
      );
}
