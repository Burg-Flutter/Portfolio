import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/Common/primary.dart';
import 'package:portfolio/Home/home.dart';
import 'package:portfolio/Navbar/textTile.dart';

class Navbar extends StatefulWidget {
  const Navbar({super.key});

  @override
  State<Navbar> createState() => _NavbarState();
}

class _NavbarState extends State<Navbar> {
  final ScrollController _scrollController = ScrollController();

  final GlobalKey _homeKey = GlobalKey();
  final GlobalKey _aboutKey = GlobalKey();
  final GlobalKey _skillsKey = GlobalKey();
  final GlobalKey _educationKey = GlobalKey();
  final GlobalKey _projectsKey = GlobalKey();
  final GlobalKey _experienceKey = GlobalKey();

  void _scrollToSection(GlobalKey key) {
    if (key.currentContext != null) {
      Scrollable.ensureVisible(
        key.currentContext!,
        duration: const Duration(seconds: 1),
        curve: Curves.easeInOut,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: primaryColor,
      appBar: AppBar(
        shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.vertical(bottom: Radius.circular(20)),
        ),
        elevation: 30,
        shadowColor: primaryColor,
        backgroundColor: primaryColor,
        toolbarHeight: 80,
        title: Text(
          "Harshal",
          style: GoogleFonts.caveat(color: Colors.white, fontSize: 35),
        ),
        actions: [
          TextTile(text: 'Home', onPressed: () => _scrollToSection(_homeKey)),
          SizedBox(width: 20),
          TextTile(text: 'About', onPressed: () => _scrollToSection(_aboutKey)),
          SizedBox(width: 20),
          TextTile(
            text: 'Skills',
            onPressed: () => _scrollToSection(_skillsKey),
          ),
          SizedBox(width: 20),
          TextTile(
            text: 'Education',
            onPressed: () => _scrollToSection(_educationKey),
          ),
          SizedBox(width: 20),
          TextTile(
            text: 'Projects',
            onPressed: () => _scrollToSection(_projectsKey),
          ),
          SizedBox(width: 20),
          TextTile(
            text: 'Experience',
            onPressed: () => _scrollToSection(_experienceKey),
          ),
          SizedBox(width: 100),
        ],
      ),
      body: SingleChildScrollView(
        controller: _scrollController,
        child: Column(
          children: [
            Home(key: _homeKey),
            // AboutSection(key: _aboutKey),
            // SkillsSection(key: _skillsKey),
            // ContactSection(key: _contactKey),
          ],
        ),
      ),
    );
  }
}
