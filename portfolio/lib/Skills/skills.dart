import 'package:flutter/material.dart';
import 'package:portfolio/Common/primary.dart';
import 'package:portfolio/Skills/skillsTile.dart';
import 'package:scroll_snap_widgets/scroll_snap_widgets.dart';

class Skills extends StatefulWidget {
  const Skills({Key? key}) : super(key: key);

  @override
  State<Skills> createState() => _SkillsState();
}

class _SkillsState extends State<Skills> {
  //for size pass the same double value as itemSize while initialising the controller
  final ScrollSnapWidgetsController _controller = ScrollSnapWidgetsController(
    size: 150,
  );

  List<String> skills = [
    "Flutter",
    "Dart",
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "React",
    "MySql",
    "Postgresql",
    "MongoDB",
    "Firebase",
  ];

  List<String> images = ['assets/images/flutter.png'];
  bool _isHovering = false;
  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width,
      color: reversePrimaryColor,
      child: ScrollSnapWidgets(
        //instance of ScrollSnapWidgetsController
        controller: _controller,
        //total height of the widget because its horizontal
        widgetSize: 300,
        //horizontally scrollable snapping items
        scrollDirection: Axis.horizontal,
        //width of each item
        itemSize: 150,
        //total number of items
        itemCount: 10,
        //item widget builder
        itemBuilder:
            (itemIndex) =>
                SkillsTile(text: skills[itemIndex], image: images[itemIndex]),
      ),
    );
  }
}
