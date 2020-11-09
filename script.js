console.log('it works')

$(document).ready(function () {
            $('.submit').click(function (event) {
                       
                        console.log('clicked button')

                        var name = $('.name').val()
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
            



                var TxtType = function(el, toRotate, period) {
                    this.toRotate = toRotate;
                    this.el = el;
                    this.loopNum = 0;
                    this.period = parseInt(period, 10) || 2000;
                    this.txt = '';
                    this.tick();
                    this.isDeleting = false;
                };
            
                TxtType.prototype.tick = function() {
                    var i = this.loopNum % this.toRotate.length;
                    var fullTxt = this.toRotate[i];
            
                    if (this.isDeleting) {
                    this.txt = fullTxt.substring(0, this.txt.length - 1);
                    } else {
                    this.txt = fullTxt.substring(0, this.txt.length + 1);
                    }
            
                    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
            
                    var that = this;
                    var delta = 200 - Math.random() * 100;
            
                    if (this.isDeleting) { delta /= 2; }
            
                    if (!this.isDeleting && this.txt === fullTxt) {
                    delta = this.period;
                    this.isDeleting = true;
                    } else if (this.isDeleting && this.txt === '') {
                    this.isDeleting = false;
                    this.loopNum++;
                    delta = 500;
                    }
            
                    setTimeout(function() {
                    that.tick();
                    }, delta);
                };
            
                window.onload = function() {
                    var elements = document.getElementsByClassName('typewrite');
                    for (var i=0; i<elements.length; i++) {
                        var toRotate = elements[i].getAttribute('data-type');
                        var period = elements[i].getAttribute('data-period');
                        if (toRotate) {
                          new TxtType(elements[i], JSON.parse(toRotate), period);
                        }
                    }
                    // INJECT CSS
                    var css = document.createElement("style");
                    css.type = "text/css";
                    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
                    document.body.appendChild(css);
                };