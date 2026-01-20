# Groupon Mobile Prototype - High Fidelity Design System

## 1. Global Reset & Layout
* **Font Family:** 'Nunito Sans', sans-serif.
* **Page Background:** `#F6F7F9` (Light Gray - NOT white).
* **Card Background:** `#FFFFFF` (Pure White).
* **Viewport:** Mobile width (393px).
* **Safe Area:** Sticky footers must have `pb-8` (padding-bottom) to account for the iOS Home Indicator.

## 2. Color Palette (Strict Hex Codes)
Do not use default Tailwind colors. Use these exact overrides.

### Brand Colors
* **Primary Groupon Green:** `#177C1F` (THE MAIN COLOR - Used for: Logo, Buttons, Prices, Checkmarks, Borders, ALL Primary Actions).
* **Brand Purple (`groupon-purple`):** `#702082` (Used for: Promo Code text, Promo Bar).
* **Promo Background (`promo-bg`):** `#F3E5F5` (Very light purple background for promo boxes).
* **Rating Yellow (`star-yellow`):** `#F5A623` (Stars).

### Grays (Text & UI)
* **Text Primary (`text-main`):** `#2D2D2D` (Almost black - Titles, Body text).
* **Text Secondary (`text-sub`):** `#757575` (Merchant names, locations, "bought" counts).
* **Text Disabled (`text-muted`):** `#BDBDBD` (Original Prices strikethrough).
* **Dividers (`border-line`):** `#E0E0E0` (Thin lines between options).
* **Input Borders (`border-input`):** `#CCCCCC` (Unselected radio options).

## 3. Typography Hierarchy
* **Deal Title:** `text-[20px] leading-tight font-bold text-main` (Line height 1.25 for density)
* **Price (Discounted):** `text-[22px] leading-[24px] font-extrabold text-[#177C1F]`
* **Price (Original):** `text-[14px] line-through text-muted`
* **Discount Badge:** `text-[12px] font-bold text-white`
* **Section Header:** `text-[18px] font-bold text-main mb-2` (Margin reduced from mb-3)
* **Body Text:** `text-[14px] leading-[22px] text-main`

## 3A. Mobile Header (4-Layer Stack - COMPRESSED)

**Row 1: Purple Promo Bar**
* `h-8 bg-[#702082] flex items-center justify-center`
* Text: "Save up to 20% with code PROMO" (`text-xs font-bold text-white tracking-wide`)

**Row 2: Brand Nav**
* `h-14 flex items-center justify-between px-3 bg-white` (Keep standard)
* Left: Hamburger Menu
* Center: Groupon SVG Logo (h-6)
* Right: Heart, ShoppingCart, Bell icons (w-6) + User Avatar (w-8 h-8 "MH")

**Row 3: Search Bar (TIGHTER)**
* Container: `px-3 pb-1 bg-white` (Reduced from pb-2)
* Pill: `w-full h-10 rounded-full border border-[#177C1F] shadow-sm`
* Content: Search icon + "Search Groupon" (`text-sm`)

**Row 4: Category Strip (TIGHTER)**
* Container: `pl-3 pb-2 mt-1 bg-white overflow-x-auto`
* Items: `text-xs font-bold text-gray-700 mr-5` (Reduced from text-sm)

## 3B. Deal Card Text Stack (COMPRESSED)

**Title Section Spacing:**
* Title: `text-[20px] leading-tight font-[800]`
* Merchant Line: `mt-1 flex items-center gap-1` (Reduced from mt-2)
* Ratings Line: `mt-1 flex items-center gap-2`

**Option Section:**
* Container: `px-4 pt-3 pb-4` (Reduced top padding from py-4)
* Header: `text-[18px] font-bold mb-2` (Reduced from mb-3)

**Goal:** User should see Title, Merchant, Ratings, AND first 2 Options above the fold.

## 4. Components & Shapes

### A. Breadcrumbs Navigation
Located immediately above the Hero Image, provides hierarchical navigation context.

* **Container:** `w-full bg-[#F6F7F9] px-4 py-2`
* **Inner Flex:** `flex items-center gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide`
* **Text Style:** `text-[11px] font-medium`
  * Intermediate items: `text-[#757575]` (Medium Gray)
  * Last item (current page): `text-gray-900` (Darker for emphasis)
* **Separator:** ChevronRight icon `w-3 h-3 text-gray-400 flex-shrink-0`
* **Example:** `Local › Atlanta › Beauty & Spas › Massage`

**Data Source:**
- Extracted from `taxonomy` array in deal JSON
- Fallback: Synthetic path based on deal type (e.g., "Things To Do › City › Category")
- Limited to 3-4 items maximum

### B. The Option Selector (Radio Card) - COMPRESSED
* **Container Spacing:** `flex flex-col gap-2` (8px vertical gap - TIGHTER).
* **Base Style:** `relative border rounded-xl p-3 cursor-pointer bg-white` (Padding reduced to 12px)

**Unselected State:**
* `border-gray-200`

**Selected State:**
* `border-[#0073EA] border-[2px]` (Blue border for active selection)
* Background remains `bg-white` (NO green tint)

**Internal Layout:**
* `grid grid-cols-[24px_1fr] gap-2 items-start` (Gap reduced to 8px)

**Custom Radio Button (Blue Selection Indicator):**
* Container: `h-6 w-6 rounded-full border-2 flex items-center justify-center flex-shrink-0`
* Unselected: `border-gray-300 bg-white`
* Selected: `border-[#0073EA] bg-white` with inner dot `h-3 w-3 rounded-full bg-[#0073EA]`

**Content Hierarchy:**
* Title: `font-bold text-gray-900 text-[15px] leading-tight mb-1`
* Price: `text-[#177C1F] text-[18px] font-[800] tracking-tight` (Reduced from 20px to increase density)
* Original Price: `text-gray-400 text-[11px] line-through ml-2` (Reduced from 12px)
* Discount Badge: `ml-2 bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold px-1.5 py-0.5 rounded` (Stays GREEN)

### C. Badges
* **Percentage Off:** `bg-[#177C1F] rounded-[4px] px-1.5 py-0.5 text-xs font-bold text-white`.
* **Urgency/Promo:** `text-[#702082] text-xs font-bold`.

### D. Sticky Footer (Purchase Bar)
* **Container:** `fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-50`
* **Shadow:** `shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.08)]` (Casts shadow UPWARDS onto the content).
* **Button:** `w-full bg-[#177C1F] hover:bg-[#136619] text-white font-bold py-3.5 rounded-full text-[16px]`.
    * *Note:* If the deal is a product/service, the button text is "Buy Now".
    * *Note:* If the deal is a "Ticket" or requires selection, the button text is "Select Option".

### E. Image Carousel
* **Corner Radius:** The main image is `rounded-none` on mobile (full width), but `rounded-b-[12px]` in some views. For this prototype, use **Full Width** `w-full aspect-[4/3] object-cover`.
* **Overlay Icons:** Back arrow and Share/Heart icons are inside white circles: `bg-white/90 p-2 rounded-full shadow-sm text-gray-700`.

## 5. Spacing System
* **Horizontal Padding:** `px-4` (16px) is the law.
* **Section Spacing:** `py-4` (16px) between small elements, `py-8` (32px) between major sections.
* **Gap:** Use `gap-3` (12px) for list items.