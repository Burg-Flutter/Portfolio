import 'package:portfolio/Home/home.dart';

import './Navbar/navbar.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: ScrollToSectionUsingKey(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class ScrollToSectionUsingKey extends StatefulWidget {
  const ScrollToSectionUsingKey({super.key});

  @override
  _ScrollToSectionUsingKeyState createState() =>
      _ScrollToSectionUsingKeyState();
}

class _ScrollToSectionUsingKeyState extends State<ScrollToSectionUsingKey> {
  @override
  Widget build(BuildContext context) {
    return Navbar();
  }
}
