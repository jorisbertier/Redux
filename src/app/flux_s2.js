const DoubleCantal = {
    title: 'Double Cantal',
    price: 15.99,
}

const SuperCremeux = {
    title: 'Super Crémeux',
    price: 14.99,
}
const PouletCroquant = {
    title: 'Poulet Croquant',
    price: 17.99,
}

const PRODUCT_LIST = {
    PouletCroquant,
    SuperCremeux,
    DoubleCantal
}

let state = {
    list: []
};

const subscribe = (subscriberFct) => {
    subscribers.push(subscriberFct);
}

subscribe((state) => {
    if (state.owner) {
        console.log('Le propriétaire est ajouté', state.owner)
         document.getElementById('header').textContent = `Le propriétaire du restaurant est ${state.owner.firstName}`
    }
})

const dispacth = (newstateValue) => {
    state = newstateValue
    for(const fct of baskets) {
        fct(state)
    }
}
s
document.getElementsByClassName('orderButton').forEach(element => {
    element.addEventListener('click', (event)=> {
        const productId = event.target.dataset['id']
        const productList = state.list;
        productList.push(PRODUCT_LIST[productId])
        dispacth({
            list: productList
        })
    })
});
let command = document.getElementById('command')

