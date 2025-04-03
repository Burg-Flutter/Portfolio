import 'package:flutter/material.dart';
import 'package:portfolio/Common/primary.dart';

class TextTile extends StatefulWidget {
  final String text;
  final VoidCallback onPressed;

  const TextTile({Key? key, required this.text, required this.onPressed})
    : super(key: key);

  @override
  _TextTileState createState() => _TextTileState();
}

class _TextTileState extends State<TextTile>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _scaleAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(milliseconds: 300),
      vsync: this,
    );
    _scaleAnimation = Tween<double>(
      begin: 1.0,
      end: 1.1,
    ).animate(CurvedAnimation(parent: _controller, curve: Curves.easeInOut));
  }

  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) {
        _controller.forward();
        setState(() {
          _isHovered = true;
        });
      },
      onExit: (_) {
        _controller.reverse();
        setState(() {
          _isHovered = false;
        });
      },
      child: GestureDetector(
        onTap: widget.onPressed,
        child: ScaleTransition(
          scale: _scaleAnimation,
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 300),
            padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 10),
            decoration: BoxDecoration(
              color: primaryColor,
              borderRadius: BorderRadius.circular(20),
              boxShadow:
                  _isHovered
                      ? [
                        BoxShadow(
                          color: Colors.white.withOpacity(0.2),
                          blurRadius: 10,
                          offset: const Offset(0, 6),
                        ),
                      ]
                      : [],
            ),
            child: Text(
              widget.text,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}
