# Requirements Document

## Introduction

This document specifies the requirements for the Cor'z Eatery Website, a static informational website built with HTML, CSS, and JavaScript. The website serves tourists and motorists traveling to Sprite Falls in Majayjay, Laguna by providing eatery information, a menu, location details, and a photo gallery. The site must be mobile-responsive for visitors on the go and must meet WCAG AA accessibility standards. The website will be implemented in the existing project directory at `Project1/` using the existing `index.html`, `style.css`, and `script.js` files.

## Glossary

- **Corz_Eatery_Website**: The complete static informational website for Cor'z Eatery, composed of five pages and shared navigation, footer, and styling.
- **Visitor**: A tourist or motorist viewing the website on a desktop or mobile device.
- **Home_Page**: The landing page displaying the hero section, introduction, and quick links.
- **Menu_Page**: The page listing food and drink items with prices, grouped by category.
- **About_Page**: The page describing the story and background of Cor'z Eatery.
- **Location_Page**: The page displaying the address, embedded map, contact details, and landmarks.
- **Gallery_Page**: The page displaying photographs of food, the eatery, and nearby Sprite Falls.
- **Navigation_Bar**: The shared top navigation component containing links to every page.
- **Footer**: The shared bottom section displayed on all pages containing contact information and social links.
- **Hero_Section**: The prominent banner area at the top of the Home_Page containing a welcome message and a photo.
- **Quick_Link**: A clickable button on the Home_Page that navigates to the Menu_Page or the Location_Page.
- **Design_System**: The defined set of colors, fonts, and component styles applied consistently across the website.
- **Sprite_Falls**: The tourist destination in Majayjay, Laguna located near Cor'z Eatery.
- **Primary_Color**: The color #2E7D32 (Forest Green) representing nature and the nearby river.
- **Secondary_Color**: The color #FF8F00 (Warm Orange) used for appetizing accents and buttons.
- **Accent_Color**: The color #0288D1 (River Blue) representing the water of Sprite Falls.
- **Menu_Item**: A single food or drink entry listed on the Menu_Page, consisting of a name, price, and optional image.
- **Category**: A grouping of Menu_Items on the Menu_Page, such as Meals, Snacks, or Drinks.

## Requirements

### Requirement 1: Site Navigation

**User Story:** As a visitor, I want a navigation bar on every page, so that I can move between pages without returning to a home screen.

#### Acceptance Criteria

1. THE Navigation_Bar SHALL display links to the Home_Page, Menu_Page, About_Page, Location_Page, and Gallery_Page.
2. WHEN a Visitor clicks a navigation link, THE Corz_Eatery_Website SHALL load the corresponding page.
3. WHILE the Visitor is viewing a specific page, THE Navigation_Bar SHALL visually highlight the link for that active page.
4. WHILE the viewport width is less than 768px, THE Navigation_Bar SHALL collapse into a toggle-controlled menu.

### Requirement 2: Home / Landing Page

**User Story:** As a tourist heading to Sprite Falls, I want a landing page, so that I can quickly understand what Cor'z Eatery is and that it is near the destination.

#### Acceptance Criteria

1. THE Home_Page SHALL display a Hero_Section containing a welcome message and a photo of the eatery.
2. THE Home_Page SHALL display a brief introduction describing Cor'z Eatery.
3. THE Home_Page SHALL display a highlight message stating that the eatery is located near Sprite Falls in Majayjay.
4. THE Home_Page SHALL display Quick_Links to the Menu_Page and the Location_Page.
5. WHEN a Visitor clicks a Quick_Link, THE Corz_Eatery_Website SHALL navigate to the corresponding page.

### Requirement 3: Menu Page

**User Story:** As a visitor, I want to view the menu with prices, so that I can decide what to order before arriving.

#### Acceptance Criteria

1. THE Menu_Page SHALL list Menu_Items with a name and a price for each item.
2. THE Menu_Page SHALL group Menu_Items into Categories.
3. THE Menu_Page SHALL label each Category with a descriptive heading.
4. WHERE an image asset is available for a Menu_Item, THE Menu_Page SHALL display that image next to the item.
5. THE Menu_Page SHALL display each item price in Philippine Pesos.

### Requirement 4: About Us Page

**User Story:** As a visitor, I want to read about Cor'z Eatery, so that I can understand its story and why it is a recommended stop near Sprite Falls.

#### Acceptance Criteria

1. THE About_Page SHALL display a short narrative describing the history of Cor'z Eatery.
2. THE About_Page SHALL display content explaining why Cor'z Eatery is a recommended dining choice near Sprite Falls.
3. WHERE owner information is provided, THE About_Page SHALL display the owner information.

### Requirement 5: Location / Contact Page

**User Story:** As a motorist, I want the address, a map, and contact details, so that I can find the eatery and reach out for inquiries.

#### Acceptance Criteria

1. THE Location_Page SHALL display the address located in Majayjay, Laguna near Sprite Falls.
2. THE Location_Page SHALL embed an interactive Google Map centered on the eatery location.
3. THE Location_Page SHALL display a contact number and a link to the eatery Facebook page.
4. THE Location_Page SHALL display landmarks to help tourists and motorists locate the eatery.
5. WHEN a Visitor clicks the Facebook page link, THE Corz_Eatery_Website SHALL open the Facebook page in a new browser tab.

### Requirement 6: Gallery Page

**User Story:** As a visitor, I want to view photos of the food and the area, so that I can preview what to expect at Cor'z Eatery and Sprite Falls.

#### Acceptance Criteria

1. THE Gallery_Page SHALL display images of food, the eatery, and nearby Sprite Falls.
2. THE Gallery_Page SHALL display a descriptive caption for each image.
3. WHEN a Visitor clicks an image, THE Gallery_Page SHALL display the image in an enlarged view overlay.

### Requirement 7: Design System

**User Story:** As a developer, I want a consistent design system, so that the website appears cohesive, fresh, and appetizing across all pages.

#### Acceptance Criteria

1. THE Design_System SHALL apply the Primary_Color #2E7D32 to primary surfaces such as headers and navigation.
2. THE Design_System SHALL apply the Secondary_Color #FF8F00 to call-to-action elements and accents.
3. THE Design_System SHALL apply the Accent_Color #0288D1 to highlights referencing the river and water.
4. THE Design_System SHALL use #FFFFFF, #F5F5F5, and #212121 as neutral background and text colors.
5. THE Design_System SHALL apply the Poppins Bold font to headings sized between 32px and 48px.
6. THE Design_System SHALL apply the Inter Regular font to body text sized between 14px and 16px.
7. THE Design_System SHALL style buttons with a corner radius of 8px, a #FF8F00 background, and white text.
8. WHEN a Visitor hovers the pointer over a button, THE Design_System SHALL apply a visible hover effect.

### Requirement 8: Accessibility (WCAG AA)

**User Story:** As a visitor with accessibility needs, I want the website to meet WCAG AA standards, so that I can perceive and operate the content effectively.

#### Acceptance Criteria

1. THE Design_System SHALL maintain a contrast ratio of at least 4.5:1 between body text and its background.
2. THE Design_System SHALL maintain a contrast ratio of at least 3:1 between large text and UI components and their backgrounds.
3. WHERE an image conveys meaningful information, THE Corz_Eatery_Website SHALL provide descriptive alternative text for that image.
4. WHEN a Visitor navigates using the keyboard, THE Corz_Eatery_Website SHALL display a visible focus indicator on the focused element.
5. THE Corz_Eatery_Website SHALL provide a logical heading hierarchy starting with one level-one heading per page.

### Requirement 9: Mobile Responsiveness

**User Story:** As a tourist on the go, I want the website to work on my mobile device, so that I can access eatery information while traveling.

#### Acceptance Criteria

1. THE Corz_Eatery_Website SHALL adapt its layout for viewports with a width less than 768px.
2. WHILE the viewport width is less than 768px, THE Navigation_Bar SHALL collapse into a toggle-controlled menu.
3. THE Corz_Eatery_Website SHALL display content without horizontal scrolling on viewports with a width of 320px and above.
4. THE Corz_Eatery_Website SHALL scale images to fit within the width of the viewport.

### Requirement 10: Shared Footer

**User Story:** As a visitor, I want a footer on every page, so that I can find contact information and social links regardless of which page I am viewing.

#### Acceptance Criteria

1. THE Footer SHALL appear on the Home_Page, Menu_Page, About_Page, Location_Page, and Gallery_Page.
2. THE Footer SHALL display the eatery contact number and a link to the eatery Facebook page.
3. THE Footer SHALL display the eatery address in Majayjay, Laguna.
