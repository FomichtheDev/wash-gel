const initialState = [
    {
        name: 'A',
        type: 'White',
        color: 'white',
        id: 1,
        weight: 15,
        washes: 150,
        price: 900,
        discountPrice: 79,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk',
        img: `${require('../images/powder.jpg')}`
    },
    {
        name: 'B',
        type: 'White',
        color: 'white',
        id: 2,
        weight: 15,
        washes: 150,
        price: 1100,
        discountPrice: 79,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk',
        img: `${require('../images/powder.jpg')}`
    },
    {
        name: 'C',
        type: 'White',
        color: 'white',
        id: 3,
        weight: 5,
        washes: 1150,
        price: 100,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk',
        img: `${require('../images/powder.jpg')}`
    },
    {
        name: 'D',
        type: 'White',
        color: 'white',
        id: 4,
        weight: 10,
        washes: 150,
        price: 100,
        discountPrice: 109,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk',
        img: `${require('../images/powder.jpg')}`
    },
    {
        name: 'BA',
        type: 'White',
        color: 'white',
        id: 5,
        weight: 1,
        washes: 150,
        price: 1000,
        discountPrice: 709,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk',
        img: `${require('../images/powder.jpg')}`
    },
    {
        name: 'AD',
        type: 'White',
        color: 'white',
        id: 6,
        weight: 5,
        washes: 150,
        price: 1100,
        discountPrice: 799,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk',
        img: `${require('../images/powder.jpg')}`
    },
    {
        name: 'AV',
        type: 'White',
        color: 'white',
        id: 7,
        weight: 10,
        washes: 500,
        price: 100,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk',
        img: `${require('../images/powder.jpg')}`
    },
    {
        name: 'AP',
        type: 'White',
        color: 'white',
        id: 8,
        weight: 5,
        washes: 150,
        price: 100,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk',
        img: `${require('../images/powder.jpg')}`
    },
    {
        name: 'h',
        type: 'White',
        color: 'white',
        id: 9,
        weight: 1,
        washes: 150,
        price: 100,
        discountPrice: 79,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk',
        img: `${require('../images/powder.jpg')}`
    },
];


const WashingPowderReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default WashingPowderReducer;
