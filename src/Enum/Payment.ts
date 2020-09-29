enum PaymentAccount {
    STRIPE = 'Stripe',
    BRAINTREE = 'Braintree'
}

enum PaymentMethod {
    PAY_ON_ARRIVAL = 'pay_on_arrival',
    PARTIAL_PREPAID = 'partial_prepaid',
    PREPAID = 'prepaid'
}

export {
    PaymentAccount,
    PaymentMethod
};
