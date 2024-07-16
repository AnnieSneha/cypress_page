///<reference types="cypress"/>
////<reference types="@cypress/xpath" />

describe('Web Tables', () => {
    it('test Scripts for tables', () => {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 

       cy.xpath('//table[@name="courses"]/tbody/tr[6]/td[2]').should('include.text','Learn JMETER from Scratch - (Performance + Load) Testing Tool')//to go to certain table
       //table data <td>

       cy.xpath('//table[@name="courses"]/tbody/tr[11]/td[3]').click()
       //[web table fixed header] so we use table[2]  ,always starts with table as the tagname
       cy.xpath('(//table)[2][@id="product"]/tbody/tr[8]/td[2]').click()
       
        });

    it('test2', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 

        cy.xpath('//table[@name="courses"]/tbody/tr[9]/td').each(($ele)=>{

            if($ele.text().includes("Python")){  //if it contain python then it prints the next one

                cy.wrap($ele).next().then((num)=>{  //num is a variable
                            //then checks the num value as 25
                    cy.log(num.text())
                })
                
            }
        })

        
    });
});


