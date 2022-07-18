/// <reference types='cypress'/>

//import createRecipient from "../support/query"



describe('POST /graphql', function() {
    
    it('Deve cadastrar um Recipient', () => {

        const token = {
            acess_token: 'eyJhbGciOiJIUzI1NiJ9.IjAxODY3OGEwLWZkMzgtNDM5Zi1hZDI2LTYyN2Y2YzhmZjY3ZiI.mufsp0Uqd4L44V-gIY7GcHfG4Nuhf2eTaEErSYRxoa0'
        }

        const createRecipient = {
            mutation: `{
                createRecipient(input: {email: "alessandra_teresinha_ferreira@engeco.com.br", 
                    documentId: "19011100280", phone: "47995285651", firstName: "Alessandra", 
                    lastName: "Ferreira", referenceId: "000020" }){
                        recipient{
                        id
                        email
                        documentId
                        phone
                        firstName
                        lastName
                        availableBalance
                        unavailableBalance
                        gatewayRecipients{
                            edges{
                              node{
                                id
                                gateway
                                gatewayReference
                                errorHash
                              }
                            }
                        }
                    }
                }
            }`
        }
        
        cy.request({
            method: 'POST',
            url: 'https://jamespay.stage.james.delivery/graphql',
            body: {
                mutation: createRecipient
            },
            headers: {
                token: token
            }
        }).then(function(response){
            console.log(response.body)
            expect(response.status).be.equal(201)
        });
    })

    it.only('List Recipient by Email', () => {
       
        // var serachRecipientByEmail = {
        //     query: `{
        //         recipient(email: "eduardo.leszczij@jamesdelivery.com.br") {
        //         availableBalance
        //             unavailableBalance
        //             createdAt
        //             documentId
        //             email
        //             firstName
        //             lastName
        //             phone
        //             id
        //             updatedAt
        //             splitRules{
        //                 edges{
        //                     node{
        //                         id
        //                         amount
        //                     }
        //                 }
        //             }
        //             bankAccounts{
        //                 edges{
        //                     node{
        //                         bankCode
        //                         agency
        //                         account
        //                         accountDigit
        //                     }
        //                 }
        //             }
        //             payouts{
        //                 edges{
        //                     node{
        //                         amount
        //                     }
        //                 }
        //             }
        //         }`
        //     }

        const query = {
             query: `{
                    ping
                }`
        }
        

        cy.api ({
            method: 'POST',
            url: "/graphql",
            body: query,
            headers: {
                'authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.IjAxODY3OGEwLWZkMzgtNDM5Zi1hZDI2LTYyN2Y2YzhmZjY3ZiI.mufsp0Uqd4L44V-gIY7GcHfG4Nuhf2eTaEErSYRxoa0`,
                'Content-Type': 'application/json',
                'X-CLIENT-IDENTITY': 'MDE4Njc4YTAtZmQzOC00MzlmLWFkMjYtNjI3ZjZjOGZmNjdm',
                'x-frame-options': 'SAMEORIGIN',
                "failOnStatusCode": false

                
            }
        }).then(function(response){
            console.log(response.body)
        })
        
    });
});

    


