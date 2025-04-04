import 'package:flutter/material.dart';

class SkillsTile extends StatefulWidget {
  final String text;
  final String image;

  SkillsTile({required this.text, required this.image});

  @override
  _SkillsTileState createState() => _SkillsTileState();
}

class _SkillsTileState extends State<SkillsTile> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) {
        setState(() {
          _isHovered = true;
        });
      },
      onExit: (_) {
        setState(() {
          _isHovered = false;
        });
      },
      child: AnimatedContainer(
        duration: Duration(milliseconds: 200),
        height: 50,
        width: 150,
        transform:
            _isHovered ? Matrix4.identity().scaled(1.1) : Matrix4.identity(),
        decoration: BoxDecoration(
          color: _isHovered ? Colors.blue : Colors.grey,
          borderRadius: BorderRadius.circular(8),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(widget.image, height: 80, width: 80),
            SizedBox(height: 8),
            Text(
              widget.text,
              style: TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
