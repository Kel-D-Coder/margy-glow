import vitamin from './images/products/vitamin-c-serum.jpg';
import oilContorl from './images/products/oil-control-toner.jpg'
import hyaluronicJelly from './images/products/hyaluronic-jelly-face-mask.jpg'
import soothingFaceWash from './images/products/soothing-face-wash.jpg'
import BODYBUTTER from './images/products/BODY BUTTER(stretch mark therapy).jpg'
import faceMoisturizer from './images/products/face moisturizer.jpg'

export const products = [

    {
        id: 1,
        name: 'Vitamin C Serum',
        image: vitamin,
        price: '₦ 5,000',
        description: 'Deeply hydrates the skin, treats and calms the skin irritation like redness, burnt and sensitive skin. Takes care of dry skin, reduces wrinkles and fine lines. Plumps the skin and securing moisture and hydration, reverses the signs of aging. For all skin types, can be used together with any product, best paired with sunscreen.',
        ingredients: 'Ascorbic acid(vitamin C), hyaluronic acid, hydrosol, distilled water'
    },

    {
        id: 2,
        name: 'Rose hyaluronic jelly',
        image: hyaluronicJelly,
        price: '₦ 5,000',
        description: 'Deeply hydrate the skin, brightens dull skin, reduces signs of aging, wrinkles, fine line and other aging signs, control water loss and prevent dehydration, control excess oil/sebum production, reduces hyperpigmentation.',
        ingredients: 'Hyaluronic acid, glycerin, germall plus, distilled water, mica powder, rose hydrosol, D panthenol, niacinamide, chamomile extract.'
    },

    {
        id: 3,
        name: 'Oil control toner',
        image: oilContorl,
        price: '₦ 4,500',
        description: 'Completely controls the excess oil production and deposition on the skin,treats black heads and white heads, gently exfoliates skin, smoothens the skin. treats and prevent acne and pimple break out. Suitable for daily usage, please start by using twice weekly and gradually up to 3 times and thhen 4 times until you get to 7 days a week. please when used with ance face wash or any other products containing AHA or BHA, please alternate.',
        ingredients: 'Distilled water, salicylic acid, methanol, tea tree extract.'
    },

    {
        id: 4,
        name: 'Soothing face wash',
        image: soothingFaceWash,
        price: '₦ 5,000',
        description: 'Takes care of dry skin and sensitive skin, treats skin burns, supplies hydration and moisture to skin, gently exfoliates dull skin, prevents clogging of pores hence perceive acne break out, deep cleanses skin. suitable for all skin types. Can be used with any other skincare products',
        ingredients: 'Distilled water, xanthan gum, glycerin, decyl glycoside, cocamidopropyl betaine, aloe vera, chamomile extract, cucumber extract, calendula extract, mandelic acid, liquid germall plus.'
    },

    {
        id: 5,
        name: 'Snow white body cream',
        image: soothingFaceWash,
        price: '₦ 15,000',
        description: 'This is the strongest lightening body cream available. It gives two three shades with consistency. Most suitable for those with white skin. It deeply moisturize the skin, and retain moisture for a long time. It brightens dull white skin, and increase radiants. It also helps to blend uneven white skin. This body cream should not necessarily be used with another strong lightening product like the whithening bleach soap, fruity whitening bar, as it is capable of lightening skin when used alone. Best used alone. Best used at night',
        ingredients: ''
    },

    {
        id: 6,
        name: 'Whitening body cream',
        image: soothingFaceWash,
        price: '₦ 12,000',
        description: 'This is an effective lightening cream, it is next in line to the snow white body cream as regards lightening. It gives one-two shades with consistency, it offers a deep moisturizing benefits, capable of leaving skin moisturized for 24 hours. It blends uneven skin, converts aging signs, increase skin radiance, not suitable for face use, best used at night. This product does not necessarily need to be paired with any other extra lightening or whitening product as it coghtens even when used again.',
        ingredients: ''
    },

    {
        id: 7,
        name: 'Lightening body cream',
        image: soothingFaceWash,
        price: '₦ 8,000',
        description: "Unlike other body creams, this is the most mild lightening / moisturizing body cream. It doesn't lightening the skin too much, rather it's blends and unifies the uneven skin, it gives a light caramel shade free from wrinkles or any other signs of signs of ageing . Super light weight yet locks in moisture. Safe to be paired with any whitening soap or product. Suitable for day and night. Not suitable for face use",
        ingredients: ''
    },

    {
        id: 8,
        name: 'Body butter',
        image: BODYBUTTER,
        price: '₦ 12,000',
        description: "Reduce the appearance of stretch marks, fades pregnancy scars and spots. Takes care of dry and cranky skin. Deeply moisturizes the skin. Doubles skin radiant and encourages collagen formation.suitable for all skin types and color. Most suitable for those with very dry skin, aging skin and stretch marks. For maximum effect, pair with the stretch mark set to fade stretch mark faster. Not suitable for face, use atleast twice daily.",
        ingredients: 'Shea butter, Coco butter, Mango butter, Avocado oil, Carrot seed oil, Grape seed oil, Rosehip seed oil, Pomegranate seed oil, Kojic dipalmitate, Astaxanthin, Vitamin E'
    },

    {
        id: 9,
        name: 'whitening face cream',
        image: BODYBUTTER,
        price: '₦ 6,000',
        description: "Give and extra light skin shade, brighten dark areas and even the complexion. Most suitable for white/fair/light skin. Night use only, if used during the day must be followed with sunscreen. Give a break after about 6-8 weeks of consistent usage.",
        ingredients: 'Cetvl alcohol, B-wax Water, Rosehip seed, Carrot butter, Egyptian whitening milk, Vitamin E, Germall plus'
    },

    {
        id: 10,
        name: 'lightening fade milk',
        image: BODYBUTTER,
        price: '₦ 5,000',
        description: "Brightens dull skin, takes care of dehydration and skin wrinkling. Promotes youthful skin, improves skin texture and appearance. All skin types/ colors. Use atleast twice daily. Make sure to follow with a sunscreen after usage during the day.",
        ingredients: 'Cetyl alcohol, B-wax, Water, Aloe Vera gel, Rosehip seed oil, Aloe butter, Kojic dip, Alpha-arbutin, Niacinamide, N-acetyl glucosamine, Cow milk extract, Vitamin E, Germall plus'
    },

    {
        id: 11,
        name: 'face moisturizer',
        image: faceMoisturizer,
        price: '₦ 4,500',
        description: "Makes the skin look 10x younger. Promotes youthful skin, increases and triples skin elasticity. Acts as a strong anti-aging property. Deeply moisturizes skin and traps the moisture into skin without leaving a greasy feel. Super fast absorbent. Suitable for all skin types. Best used after face serum and toner, before eye cream or sunscreen, when layering products. Can be used twice daily.",
        ingredients: 'E-wax, Cetvl alcohol, Water, Aloe Vera gel, Hydrosol, Ceramide complex, Aloe Vera butter, Rosehip seed oil, Collagen peptide, Allantoin, Glycerin, Vitamin B5, Snail muccin extract, Vitamin E, Germall plus.'
    },

    {
        id: 12,
        name: 'glow face cream',
        image: BODYBUTTER,
        price: '₦ 4,000',
        description: "Give and extra light skin shade, brighten dark areas and even the complexion. Most suitable for white/fair/light skin. Night use only, if used during the day must be followed with sunscreen. Give a break after about 6-8 weeks of consistent usage.",
        ingredients: 'Shea butter, Cocoa butter, Aloe Vera butter, Sunflower oil, Almond oil, Coconut oil, Emulsifying wax, Cetvl alcohol, Vitamin E, Water, Germall plus'
    },
]