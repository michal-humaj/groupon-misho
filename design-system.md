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
* **Primary Green (`groupon-green`):** `#53A318` (Used for: Discount Prices, Checkmarks, "Free Returns" text).
* **Dark Green (`btn-green`):** `#2E7D32` (Used for: Main "Buy" / "Choose Option" buttons - note this is darker than the text green).
* **Brand Purple (`groupon-purple`):** `#702082` (Used for: Promo Code text).
* **Promo Background (`promo-bg`):** `#F3E5F5` (Very light purple background for promo boxes).
* **Rating Yellow (`star-yellow`):** `#F5A623` (Stars).

### Grays (Text & UI)
* **Text Primary (`text-main`):** `#2D2D2D` (Almost black - Titles, Body text).
* **Text Secondary (`text-sub`):** `#757575` (Merchant names, locations, "bought" counts).
* **Text Disabled (`text-muted`):** `#BDBDBD` (Original Prices strikethrough).
* **Dividers (`border-line`):** `#E0E0E0` (Thin lines between options).
* **Input Borders (`border-input`):** `#CCCCCC` (Unselected radio options).

## 3. Typography Hierarchy
* **Deal Title:** `text-[20px] leading-[26px] font-bold text-main`
* **Price (Discounted):** `text-[22px] leading-[24px] font-extrabold text-[#53A318]`
* **Price (Original):** `text-[14px] line-through text-muted`
* **Discount Badge:** `text-[12px] font-bold text-white`
* **Section Header:** `text-[18px] font-bold text-main mb-3`
* **Body Text:** `text-[14px] leading-[22px] text-main`

## 4. Components & Shapes

### A. The Option Selector (Radio Card)
* **Container:** `bg-white rounded-[8px] border`
* **State: Unselected:** `border-[#E0E0E0]`
* **State: Selected:** `border-main border-[2px]` (Note: The border gets thicker and turns dark gray/blue).
* **Radio Button:**
    * Unselected: `h-5 w-5 rounded-full border border-gray-400 bg-white`
    * Selected: `h-5 w-5 rounded-full border-[6px] border-blue-600 bg-white` (Blue ring effect).

### B. Badges
* **Percentage Off:** `bg-[#53A318] rounded-[4px] px-1.5 py-0.5 text-xs font-bold text-white`.
* **Urgency/Promo:** `text-[#702082] text-xs font-bold`.

### C. Sticky Footer (Purchase Bar)
* **Container:** `fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-50`
* **Shadow:** `shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.08)]` (Casts shadow UPWARDS onto the content).
* **Button:** `w-full bg-[#2E7D32] hover:bg-[#1b5e20] text-white font-bold py-3.5 rounded-full text-[16px]`.
    * *Note:* If the deal is "Select Option", the button text is "Buy now".
    * *Note:* If the deal is "Ticket", the button text is "Choose Option".

### D. Image Carousel
* **Corner Radius:** The main image is `rounded-none` on mobile (full width), but `rounded-b-[12px]` in some views. For this prototype, use **Full Width** `w-full aspect-[4/3] object-cover`.
* **Overlay Icons:** Back arrow and Share/Heart icons are inside white circles: `bg-white/90 p-2 rounded-full shadow-sm text-gray-700`.

## 5. Spacing System
* **Horizontal Padding:** `px-4` (16px) is the law.
* **Section Spacing:** `py-4` (16px) between small elements, `py-8` (32px) between major sections.
* **Gap:** Use `gap-3` (12px) for list items.