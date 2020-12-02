const initialState = [
    {
        name: 'A',
        type: 'White',
        color: 'white',
        id: 1,
        v: 4.3,
        price: 100,
        discountPrice: 79,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk',
        img1: `${require('../images/unnamed.jpg')}`,
        img2: `${require('../images/gel.jpg')}`,
        img3: `${require('../images/gel_2.jpg')}`,
        img4: `${require('../images/gel3.jpg')}`
    },
    {
        name: 'b',
        type: 'Black',
        color: 'black',
        id: 2,
        v: 4.3,
        price: 100,
        discountPrice: 79,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk',
        img1: `${require('../images/unnamed.jpg')}`,
        img2: `${require('../images/gel.jpg')}`,
        img3: `${require('../images/gel_2.jpg')}`,
        img4: `${require('../images/gel3.jpg')}`
    },
    {
        name: 'c',
        type: 'Color',
        color: 'color',
        id: 3,
        v: 4.3,
        price: 67,
        discountPrice: null,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk',
        img1: `${require('../images/unnamed.jpg')}`,
        img2: `${require('../images/gel.jpg')}`,
        img3: `${require('../images/gel_2.jpg')}`,
        img4: `${require('../images/gel3.jpg')}`
    },
    {
        name: 'd',
        type: 'White',
        color: 'white',
        id: 4,
        v: 4.3,
        price: 100,
        discountPrice: 79,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhj lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk k',
        img1: `${require('../images/unnamed.jpg')}`,
        img2: `${require('../images/gel.jpg')}`,
        img3: `${require('../images/gel_2.jpg')}`,
        img4: `${require('../images/gel3.jpg')}`
    },
    {
        name: 'e',
        type: 'Color',
        color: 'color',
        id: 5,
        v: 4.3,
        price: 100,
        discountPrice: 79,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf gfgfg jkhhj lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjkk',
        img1: `${require('../images/unnamed.jpg')}`,
        img2: `${require('../images/gel.jpg')}`,
        img3: `${require('../images/gel_2.jpg')}`,
        img4: `${require('../images/gel3.jpg')}`
    },
    {
        name: 'f',
        type: 'Color',
        color: 'color',
        id: 6,
        v: 4.3,
        price: 1300,
        discountPrice: null,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk',
        img1: `${require('../images/unnamed.jpg')}`,
        img2: `${require('../images/gel.jpg')}`,
        img3: `${require('../images/gel_2.jpg')}`,
        img4: `${require('../images/gel3.jpg')}`
    },
    {
        name: 'g',
        type: 'For Kids',
        color: 'for_kids',
        id: 7,
        v: 4.3,
        price: 200,
        discountPrice: 79,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfglorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjklorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjk gfgfg jkhhjk',
        img1: `${require('../images/unnamed.jpg')}`,
        img2: `${require('../images/gel.jpg')}`,
        img3: `${require('../images/gel_2.jpg')}`,
        img4: `${require('../images/gel3.jpg')}`
    },
    {
        name: 'h',
        type: 'For Kids',
        color: 'for_kids',
        id: 8,
        v: 4.3,
        price: 100,
        discountPrice: null,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgd lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjkfg gfgfg jkhhjk',
        img1: `${require('../images/unnamed.jpg')}`,
        img2: `${require('../images/gel.jpg')}`,
        img3: `${require('../images/gel_2.jpg')}`,
        img4: `${require('../images/gel3.jpg')}`
    },
    {
        name: 'h',
        type: 'For Kids',
        color: 'for_kids',
        id: 8,
        v: 4.3,
        price: 100,
        discountPrice: null,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgd lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjkfg gfgfg jkhhjk',
        img1: `${require('../images/unnamed.jpg')}`,
        img2: `${require('../images/gel.jpg')}`,
        img3: `${require('../images/gel_2.jpg')}`,
        img4: `${require('../images/gel3.jpg')}`
    },
    {
        name: 'g',
        type: 'Universal',
        color: 'universal',
        id: 8,
        v: 4.3,
        price: 100,
        discountPrice: null,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgd lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjkfg gfgfg jkhhjk',
        img1: `${require('../images/unnamed.jpg')}`,
        img2: `${require('../images/gel.jpg')}`,
        img3: `${require('../images/gel_2.jpg')}`,
        img4: `${require('../images/gel3.jpg')}`
    },
    {
        name: 'l',
        type: 'Universal',
        color: 'universal',
        id: 8,
        v: 4.3,
        price: 100,
        discountPrice: null,
        description: 'lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgd lorem ipsum dfgjk kdjf dkjf dfj dlkjf ldk gfgdfg gfgfg jkhhjkfg gfgfg jkhhjk',
        img1: `${require('../images/unnamed.jpg')}`,
        img2: `${require('../images/gel.jpg')}`,
        img3: `${require('../images/gel_2.jpg')}`,
        img4: `${require('../images/gel3.jpg')}`
    },
];


const gelsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default gelsReducer;
