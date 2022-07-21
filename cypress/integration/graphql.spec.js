/// <reference types='cypress'/>

import { createRecipient, listCustomersById, listRecipientByEmail, teste, createCustomer, cratebankAccount, cratebankAccountInvalid, createPaymentMethod, createOrder} from "../support/query";

describe('Recipient', function() {

    it('Create Recipient', function() {
        
        cy.request({
            method: 'POST',
            url: '/graphql',
            body: createRecipient,
            headers: {
                'authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.IjAxODY3OGEwLWZkMzgtNDM5Zi1hZDI2LTYyN2Y2YzhmZjY3ZiI.mufsp0Uqd4L44V-gIY7GcHfG4Nuhf2eTaEErSYRxoa0`,
                'X-CLIENT-IDENTITY': "MDE4Njc4YTAtZmQzOC00MzlmLWFkMjYtNjI3ZjZjOGZmNjdm",
                'Content-Type': 'application/json',
                'x-frame-options': 'SAMEORIGIN',
                'failOnStatusCode': false
            }
        }).then(function(response){
            cy.log(response.body)          
        })
    });

    it('List Recipient by E-mail', function() {

        cy.request({
            method: 'POST',
            url: '/graphql',
            body: listRecipientByEmail,
            headers: {
                'authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.IjAxODY3OGEwLWZkMzgtNDM5Zi1hZDI2LTYyN2Y2YzhmZjY3ZiI.mufsp0Uqd4L44V-gIY7GcHfG4Nuhf2eTaEErSYRxoa0`,
                'X-CLIENT-IDENTITY': "MDE4Njc4YTAtZmQzOC00MzlmLWFkMjYtNjI3ZjZjOGZmNjdm",
                'Content-Type': 'application/json',
                'x-frame-options': 'SAMEORIGIN',
                'failOnStatusCode': false            
            }
            
        }).then(function(response){
            expect(response.status).to.be.eql(200)
            cy.log(response.body.data.recipient.firstName)
            expect(response.body.data.recipient.firstName).to.be.eq('test')
        })
    });
})

describe('Customer', function() {

    it('Create Customer', function() {

        cy.request({
            method: 'POST',
            url: '/graphql',
            body: createCustomer,
            headers: {
                'authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.IjAxODY3OGEwLWZkMzgtNDM5Zi1hZDI2LTYyN2Y2YzhmZjY3ZiI.mufsp0Uqd4L44V-gIY7GcHfG4Nuhf2eTaEErSYRxoa0`,
                'X-CLIENT-IDENTITY': "MDE4Njc4YTAtZmQzOC00MzlmLWFkMjYtNjI3ZjZjOGZmNjdm",
                'Content-Type': 'application/json',
                'x-frame-options': 'SAMEORIGIN',
                'failOnStatusCode': false
            }
        }).then(function(response){
            cy.log(response.body)
        })
    });

    it('List Customers By Id', function() {
        
        cy.request({
            method:'POST',
            url: '/graphql',
            body: listCustomersById,
            headers: {
                'authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.IjAxODY3OGEwLWZkMzgtNDM5Zi1hZDI2LTYyN2Y2YzhmZjY3ZiI.mufsp0Uqd4L44V-gIY7GcHfG4Nuhf2eTaEErSYRxoa0`,
                'X-CLIENT-IDENTITY': "MDE4Njc4YTAtZmQzOC00MzlmLWFkMjYtNjI3ZjZjOGZmNjdm",
                'Content-Type': 'application/json',
                'x-frame-options': 'SAMEORIGIN',
                'failOnStatusCode': false
            }
        }).then(function(response) {
            cy.log(response.body)
        });
    });
})


describe('Bank Account', function() {

    it('Create Bank Account', function() {
        
        cy.request({
            method: 'POST',
            url: '/graphql',
            body: cratebankAccount,
            headers: {
                'authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.IjAxODY3OGEwLWZkMzgtNDM5Zi1hZDI2LTYyN2Y2YzhmZjY3ZiI.mufsp0Uqd4L44V-gIY7GcHfG4Nuhf2eTaEErSYRxoa0`,
                'X-CLIENT-IDENTITY': "MDE4Njc4YTAtZmQzOC00MzlmLWFkMjYtNjI3ZjZjOGZmNjdm",
                'Content-Type': 'application/json',
                'x-frame-options': 'SAMEORIGIN',
                'failOnStatusCode': false
            }
        }).then(function(response){
            cy.log(response.body)
        })
    });

    it('Create Bank Account Invalid', function() {
        
        cy.request({
            method: 'POST',
            url: '/graphql',
            body: cratebankAccountInvalid,
            headers: {
                'authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.IjAxODY3OGEwLWZkMzgtNDM5Zi1hZDI2LTYyN2Y2YzhmZjY3ZiI.mufsp0Uqd4L44V-gIY7GcHfG4Nuhf2eTaEErSYRxoa0`,
                'X-CLIENT-IDENTITY': "MDE4Njc4YTAtZmQzOC00MzlmLWFkMjYtNjI3ZjZjOGZmNjdm",
                'Content-Type': 'application/json',
                'x-frame-options': 'SAMEORIGIN',
                'failOnStatusCode': false
            }
        }).then(function(response){
            cy.log(response.body)
        })
    });
})

describe('Payments Method', function() {

    it('crate Payment Method', function() {
        
        cy.request({
            method: 'POST',
            url: '/graphql',
            body: createPaymentMethod,
            headers: {
                'authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.IjAxODY3OGEwLWZkMzgtNDM5Zi1hZDI2LTYyN2Y2YzhmZjY3ZiI.mufsp0Uqd4L44V-gIY7GcHfG4Nuhf2eTaEErSYRxoa0`,
                'X-CLIENT-IDENTITY': "MDE4Njc4YTAtZmQzOC00MzlmLWFkMjYtNjI3ZjZjOGZmNjdm",
                'Content-Type': 'application/json',
                'x-frame-options': 'SAMEORIGIN',
                'failOnStatusCode': false
            }
        }).then(function(response){
            cy.log(response.body)
        })
    });
    
})

describe('Orders', function() {

    it('Create Order', function() {
        
        cy.request({
            method: 'POST',
            url: '/graphql',
            body: createOrder,
            headers: {
                'authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.IjAxODY3OGEwLWZkMzgtNDM5Zi1hZDI2LTYyN2Y2YzhmZjY3ZiI.mufsp0Uqd4L44V-gIY7GcHfG4Nuhf2eTaEErSYRxoa0`,
                'X-CLIENT-IDENTITY': "MDE4Njc4YTAtZmQzOC00MzlmLWFkMjYtNjI3ZjZjOGZmNjdm",
                'Content-Type': 'application/json',
                'x-frame-options': 'SAMEORIGIN',
                'failOnStatusCode': false
            }
        }).then(function(response){
            cy.log(response.body)
        })
    });
})