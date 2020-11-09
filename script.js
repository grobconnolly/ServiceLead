console.log('it works')

$(document).ready(function () {
            $('.submit').click(function (event) {
                       
                        console.log('clicked button')

                        var fullName = $('.fullName').val()
                        var email = $('.email').val()
                        var phone = $('.phone').val()
                        var company = $('.company').val()
                        var statusElm = $('.status')
                        statusElm.empty()

                        if(email.length > 5 && email.includes('@') && email.includes('.')){
                            console.log('email is valid')
                        } else {
                            event.preventDefault()
                            statusElm.append('</div>Email is not vaild<br></div>')
                        }

                        if(phone.length > 9){
                            console.log('Phone Number is vaild')
                        } else {
                            event.preventDefault()
                            statusElm.append('</div>Phone Number is not vaild</div>')
                        }

                       
                    })
                })
            