# Codex AI Dev Team Framework - Demo Application

This demo application showcases the capabilities of the Codex AI Development Team Framework. It features a responsive web interface designed to work seamlessly across all device sizes, with special attention to mobile usability.

## Features

### Mobile-First Responsive Design
- **Bottom Navigation Bar**: Fixed bottom navigation with 5 clearly labeled icons
- **375px Mobile Support**: All menu icons are guaranteed to show on screens as small as 375px wide
- **Adaptive Menu System**: "Learn" link moves to the hamburger menu on mobile devices
- **Touch-Friendly Interface**: Optimized touch targets and swipe gestures

### Navigation Components
- **Desktop Navigation**: Traditional horizontal navigation in the header
- **Mobile Hamburger Menu**: Collapsible menu for mobile devices containing the "Learn" link
- **Bottom Navigation**: Always-visible bottom menu bar with essential functions:
  - Home
  - About  
  - Agents
  - Projects
  - Settings

### Responsive Breakpoints
- **Desktop**: > 768px - Full navigation in header
- **Tablet**: 768px and below - Hamburger menu activated
- **Mobile**: 375px and below - Optimized icon and text sizing
- **Small Mobile**: 320px and below - Further size optimizations

## Technical Implementation

The demo application demonstrates modern web development best practices:

- **Semantic HTML5**: Proper document structure and accessibility
- **CSS3 Flexbox/Grid**: Responsive layout techniques
- **Vanilla JavaScript**: No dependencies, lightweight implementation
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **Touch Support**: Swipe gestures and touch-optimized interactions

## Usage

Simply open `index.html` in a web browser to view the demo. The application will automatically adapt to your screen size.

### Testing Mobile Responsiveness

1. Open the demo in a desktop browser
2. Use browser developer tools to simulate mobile devices
3. Test specifically at 375px width to verify all icons are visible
4. Verify that the "Learn" link appears in the hamburger menu on mobile

## Purpose

This demo application serves as:

1. **Framework Showcase**: Demonstrates what the AI development team can build
2. **Mobile Best Practices**: Shows proper responsive design implementation  
3. **Template Reference**: Provides a starting point for new projects
4. **Testing Ground**: Allows validation of responsive design principles

The responsive bottom navigation bar implementation specifically addresses the requirements for mobile devices with 375px screen width, ensuring all navigation elements remain accessible and usable.