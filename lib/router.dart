import 'package:app_sale_amazon_company/features/auth/screens/auth_screen.dart';
import 'package:flutter/material.dart';

MaterialPageRoute generateRouter(RouteSettings routeSettings) {
  switch (routeSettings.name) {
    case AuthScreen.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => const AuthScreen(),
      );
      default:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => const Scaffold(
          body: Center(
            child: Text("Screen does not exits!"),
          ),
        ),
      );
  }
}