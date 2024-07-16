describe('Make My Trip', () => {

    it('Test Scripts', () => {

        cy.visit("https://www.makemytrip.com/")
        cy.xpath('//span[@class="truncate airPortName " and @data-cy="defaultFromValue"]');
        cy.xpath('//p[@data-cy="dealCarouselMsg1" and @class="font16 lineHeight18"]');
        cy.xpath('//p[@data-cy="dealCarouselMsg2" and @class="font16 lineHeight18"]');
        cy.xpath('//p[@data-cy="dealCarouselMsg3" and @class="font16 lineHeight18"]');
        cy.xpath('//li[@data-cy="WELCOME_OFFERS" and @class="active latoBlack"]');
        
        
    });
    
});