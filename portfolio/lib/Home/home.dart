import 'package:flutter/material.dart';
import 'package:portfolio/Common/primary.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: MediaQuery.of(context).size.height, // Full height
      color: Colors.white, // Background color
      child: Stack(
        children: [
          // Background Image with Fade Effect
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
              blendMode: BlendMode.srcATop, // Alternative blend mode
              child: Image.network(
                'https://imgs.search.brave.com/9crHZQvkWFjVOl4HMI_1nfFFUI-hl5KYK51ST81O_Fw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL0pvYnND/YXJlZXJzLTkwMTU2/ODY2MC5qcGc', // Replace with actual image
                fit: BoxFit.cover,
                width: MediaQuery.of(context).size.width,
                height: double.infinity,
              ),
            ),
          ),

          // Text Positioned on the Left Side
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
                Text(
                  "I am a Flutter Developer",
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.w500,
                    color: reversePrimaryColor,
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
