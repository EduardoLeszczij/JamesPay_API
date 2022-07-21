const teste = {
    query: `{
        ping
    }`
}

const createRecipient = {
    query: `mutation {
        createRecipient (input: {
            email: "test_silva@gmail.com", 
            documentId: "54079081073",
            firstName: "test", 
            lastName: "invalido", 
            phone: "997957595", 
            referenceId: "00122122122"}) {
            recipient {
                id
                firstName
                documentId
                email
                referenceId
                gatewayRecipients {
                    edges {
                        node {
                            gateway
                            gatewayReference
                            id
                        }
                    }
                }
            }
        }
    }`
}

const listRecipientByEmail = {
    query: `{
        recipient (email: "test_silva@gmail.com"){
            firstName
            lastName
            id
            referenceId
            documentId
            bankAccounts {
                edges {
                    node {
                        account
                        agency
                        bankCode
                        status
                    }
                }
            }
        }
    }`
}

const createCustomer = {
    query: `mutation { 
        createCustomer (input: {
            email: "teste_4@gmail.com.br",
            documentId: "02400147078",
            firstName:"tests",
            lastName: "silva",
            phone: "41997878363",
            pagarmeGatewayCustomer: true,
            referenceId: "0013"}) {
                customer{
                    email
                    documentId
                    firstName
                    referenceId
                }
            }   
    }`
}

const listCustomersById = {
    query: `{ 
      customer (id: "3262ef87-e15b-44ed-aedf-2c95a277228e") {
		documentId
		firstName
		lastName
		referenceId
      }
	}`
}

const cratebankAccount = {
    query: `mutation {
        createBankAccount (input: {recipientId: "b99bad13-aaa0-44cf-970a-3c2d6c3477d6",
            account: "253227",
            accountDigit: "1",
            accountType: "CONTA_CORRENTE", 
            agency: "5319",
            bankCode: "001",
            documentId: "06534098008"		
        }) {
            bankAccount {
                id
                bankCode
                account
                accountType
                agency
                agencyDigit
                documentId
                createdAt
                updatedAt
                gatewayReference
                microDepositValidationId
                status
                recipient {
                    firstName
                    email
                    phone
                    documentId
                }
            }
        } 
    }`
}

const cratebankAccountInvalid = {
    query: `mutation {
        createBankAccount (input: {recipientId: "b99bad13-aaa0-44cf-970a-3c2d6c3477d6",
            account: "@253#227",
            accountDigit: "1",
            accountType: "CONTA_CORRENTE", 
            agency: "$5319",
            bankCode: "001",
            documentId: "06534098008"		
        }) {
            bankAccount {
                id
                bankCode
                account
                accountType
                agency
                agencyDigit
                documentId
                createdAt
                updatedAt
                gatewayReference
                microDepositValidationId
                status
                recipient {
                    firstName
                    email
                    phone
                    documentId
                }
            }
        } 
    }`
}

const createPaymentMethod = {
    query: `mutation {
        createPaymentMethod (input: { 
            customerId: "d4bf58f9-abd3-43d8-9f7c-28698ac2630e",
            paymentMethodNonce: "braintree",
        }) {
            paymentMethod {
                id
                customer {
                    id
                    email
                }
                billingAddress
                bin
                cardType
                cardholderName
                gatewayReference
                isDiscarded
                lastDigits
                type
            }
        }
    }`
}

const createOrder = {
    query: `mutation {
        createOrder(input: {
            amount: 5.00,
            paymentMethodId: "acf27990-900a-4064-8c3d-f0fb6089cc36",
            customerId: "06339978-c133-439e-be11-eb1f43441b6f",
            referenceId: "01"
        }) {
            order {
                id
                amount
                createdAt
                canceledAt
                cancelReason
                customer {
                    id
                }
                payments{
                    edges{
                        node{
                            id
                            status
                            errorMessage
                        }
                    }
                }
            }
        }
    }`
}


export {
    teste,
    listRecipientByEmail,
    listCustomersById,
    createCustomer,
    createRecipient,
    cratebankAccount,
    cratebankAccountInvalid,
    createPaymentMethod,
    createOrder
}