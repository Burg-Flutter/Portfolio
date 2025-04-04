import 'dart:async';
import 'package:flutter/material.dart';
import 'package:portfolio/Common/primary.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final List<String> _currentText = [
    "I am a Flutter Developer",
    "I am a Website Developer",
    "I am a Backend Developer",
  ];

  int _currentIndex = 0;
  Timer? _timer;

  @override
  void initState() {
    super.initState();

    // Start the periodic timer
    _timer = Timer.periodic(Duration(seconds: 3), (Timer timer) {
      setState(() {
        _currentIndex = (_currentIndex + 1) % _currentText.length;
      });
    });
  }

  @override
  void dispose() {
    _timer?.cancel(); // Clean up the timer
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: MediaQuery.of(context).size.height,
      color: Colors.white,
      child: Stack(
        children: [
          // Background Image with Shader Fade Effect
          Positioned.fill(
            child: ShaderMask(
              shaderCallback: (Rect bounds) {
                return LinearGradient(
                  begin: Alignment.centerRight,
                  end: Alignment.centerLeft,
                  colors: [Colors.transparent, primaryColor],
                  stops: [0.0, 0.6],
                  tileMode: TileMode.clamp,
                ).createShader(bounds);
              },
              blendMode: BlendMode.srcATop,
              child: Image.asset(
                'assets/images/logo.png',
                fit: BoxFit.cover,
                width: MediaQuery.of(context).size.width,
                height: double.infinity,
              ),
            ),
          ),

          // Text Section
          Positioned(
            left: 40,
            top: MediaQuery.of(context).size.height * 0.4,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Hi, I am Harshal",
                  style: TextStyle(
                    fontSize: 36,
                    fontWeight: FontWeight.bold,
                    color: reversePrimaryColor,
                  ),
                ),
                const SizedBox(height: 10),
                AnimatedSwitcher(
                  duration: const Duration(milliseconds: 800),
                  transitionBuilder:
                      (child, animation) => FadeTransition(
                        opacity: animation,
                        child: SlideTransition(
                          position: Tween<Offset>(
                            begin: Offset(0, 0.5),
                            end: Offset.zero,
                          ).animate(animation),
                          child: child,
                        ),
                      ),
                  child: Text(
                    _currentText[_currentIndex],
                    key: ValueKey<int>(_currentIndex),
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w500,
                      color: reversePrimaryColor,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
