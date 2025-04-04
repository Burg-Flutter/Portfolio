import 'package:flutter/material.dart';
import 'package:portfolio/Common/primary.dart';

class AboutPage extends StatefulWidget {
  const AboutPage({Key? key}) : super(key: key);
  @override
  State<AboutPage> createState() => _AboutPageState();
}

class _AboutPageState extends State<AboutPage> {
  bool _isHovering = false;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 50.0, top: 10),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Icon(Icons.person, size: 40, color: reversePrimaryColor),
              Text(
                'About Me',
                style: TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.bold,
                  color: reversePrimaryColor,
                ),
              ),
            ],
          ),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              MouseRegion(
                onEnter: (_) => setState(() => _isHovering = true),
                onExit: (_) => setState(() => _isHovering = false),
                child: AnimatedContainer(
                  duration: Duration(milliseconds: 300),
                  curve: Curves.easeOut,
                  height: _isHovering ? 240 : 200,
                  width: _isHovering ? 240 : 200,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _isHovering ? Colors.blueAccent : Colors.blue,
                    boxShadow:
                        _isHovering
                            ? [
                              BoxShadow(
                                color: Colors.blue.withOpacity(0.6),
                                blurRadius: 20,
                                spreadRadius: 5,
                              ),
                            ]
                            : [],
                  ),
                  child: Center(child: Icon(Icons.person, color: Colors.white)),
                ),
              ),
              SizedBox(width: MediaQuery.of(context).size.width * 0.05),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Your Name',
                      style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                        color: reversePrimaryColor,
                      ),
                    ),
                    SizedBox(height: 10),
                    Text(
                      'A brief description about yourself. You can include your profession, hobbies, or anything you want to share.',
                      style: TextStyle(
                        fontSize: 16,
                        color: reversePrimaryColor,
                      ),
                    ),
                    SizedBox(height: 10),
                    Text(
                      'Contact: your.email@example.com',
                      style: TextStyle(
                        fontSize: 16,
                        color: reversePrimaryColor,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
