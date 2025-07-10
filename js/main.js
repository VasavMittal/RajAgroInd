// Country codes for phone number dropdown
const countryCodes = [
    {code: "+93", country: "AF"},
    {code: "+355", country: "AL"},
    {code: "+213", country: "DZ"},
    {code: "+376", country: "AD"},
    {code: "+244", country: "AO"},
    {code: "+54", country: "AR"},
    {code: "+374", country: "AM"},
    {code: "+61", country: "AU"},
    {code: "+43", country: "AT"},
    {code: "+994", country: "AZ"},
    {code: "+973", country: "BH"},
    {code: "+880", country: "BD"},
    {code: "+375", country: "BY"},
    {code: "+32", country: "BE"},
    {code: "+501", country: "BZ"},
    {code: "+229", country: "BJ"},
    {code: "+975", country: "BT"},
    {code: "+591", country: "BO"},
    {code: "+387", country: "BA"},
    {code: "+267", country: "BW"},
    {code: "+55", country: "BR"},
    {code: "+673", country: "BN"},
    {code: "+359", country: "BG"},
    {code: "+226", country: "BF"},
    {code: "+257", country: "BI"},
    {code: "+855", country: "KH"},
    {code: "+237", country: "CM"},
    {code: "+1", country: "CA"},
    {code: "+238", country: "CV"},
    {code: "+236", country: "CF"},
    {code: "+235", country: "TD"},
    {code: "+56", country: "CL"},
    {code: "+86", country: "CN"},
    {code: "+57", country: "CO"},
    {code: "+269", country: "KM"},
    {code: "+242", country: "CG"},
    {code: "+506", country: "CR"},
    {code: "+385", country: "HR"},
    {code: "+53", country: "CU"},
    {code: "+357", country: "CY"},
    {code: "+420", country: "CZ"},
    {code: "+45", country: "DK"},
    {code: "+253", country: "DJ"},
    {code: "+593", country: "EC"},
    {code: "+20", country: "EG"},
    {code: "+503", country: "SV"},
    {code: "+240", country: "GQ"},
    {code: "+291", country: "ER"},
    {code: "+372", country: "EE"},
    {code: "+251", country: "ET"},
    {code: "+679", country: "FJ"},
    {code: "+358", country: "FI"},
    {code: "+33", country: "FR"},
    {code: "+241", country: "GA"},
    {code: "+995", country: "GE"},
    {code: "+49", country: "DE"},
    {code: "+233", country: "GH"},
    {code: "+30", country: "GR"},
    {code: "+502", country: "GT"},
    {code: "+224", country: "GN"},
    {code: "+245", country: "GW"},
    {code: "+592", country: "GY"},
    {code: "+509", country: "HT"},
    {code: "+504", country: "HN"},
    {code: "+36", country: "HU"},
    {code: "+354", country: "IS"},
    {code: "+91", country: "IN"},
    {code: "+62", country: "ID"},
    {code: "+98", country: "IR"},
    {code: "+964", country: "IQ"},
    {code: "+353", country: "IE"},
    {code: "+972", country: "IL"},
    {code: "+39", country: "IT"},
    {code: "+81", country: "JP"},
    {code: "+962", country: "JO"},
    {code: "+7", country: "KZ"},
    {code: "+254", country: "KE"},
    {code: "+965", country: "KW"},
    {code: "+996", country: "KG"},
    {code: "+856", country: "LA"},
    {code: "+371", country: "LV"},
    {code: "+961", country: "LB"},
    {code: "+266", country: "LS"},
    {code: "+231", country: "LR"},
    {code: "+218", country: "LY"},
    {code: "+370", country: "LT"},
    {code: "+352", country: "LU"},
    {code: "+389", country: "MK"},
    {code: "+261", country: "MG"},
    {code: "+265", country: "MW"},
    {code: "+60", country: "MY"},
    {code: "+960", country: "MV"},
    {code: "+223", country: "ML"},
    {code: "+356", country: "MT"},
    {code: "+222", country: "MR"},
    {code: "+230", country: "MU"},
    {code: "+52", country: "MX"},
    {code: "+373", country: "MD"},
    {code: "+976", country: "MN"},
    {code: "+212", country: "MA"},
    {code: "+258", country: "MZ"},
    {code: "+95", country: "MM"},
    {code: "+264", country: "NA"},
    {code: "+977", country: "NP"},
    {code: "+31", country: "NL"},
    {code: "+64", country: "NZ"},
    {code: "+505", country: "NI"},
    {code: "+227", country: "NE"},
    {code: "+234", country: "NG"},
    {code: "+850", country: "KP"},
    {code: "+47", country: "NO"},
    {code: "+968", country: "OM"},
    {code: "+92", country: "PK"},
    {code: "+507", country: "PA"},
    {code: "+675", country: "PG"},
    {code: "+595", country: "PY"},
    {code: "+51", country: "PE"},
    {code: "+63", country: "PH"},
    {code: "+48", country: "PL"},
    {code: "+351", country: "PT"},
    {code: "+974", country: "QA"},
    {code: "+40", country: "RO"},
    {code: "+7", country: "RU"},
    {code: "+250", country: "RW"},
    {code: "+966", country: "SA"},
    {code: "+221", country: "SN"},
    {code: "+381", country: "RS"},
    {code: "+232", country: "SL"},
    {code: "+65", country: "SG"},
    {code: "+421", country: "SK"},
    {code: "+386", country: "SI"},
    {code: "+252", country: "SO"},
    {code: "+27", country: "ZA"},
    {code: "+82", country: "KR"},
    {code: "+34", country: "ES"},
    {code: "+94", country: "LK"},
    {code: "+249", country: "SD"},
    {code: "+597", country: "SR"},
    {code: "+268", country: "SZ"},
    {code: "+46", country: "SE"},
    {code: "+41", country: "CH"},
    {code: "+963", country: "SY"},
    {code: "+886", country: "TW"},
    {code: "+992", country: "TJ"},
    {code: "+255", country: "TZ"},
    {code: "+66", country: "TH"},
    {code: "+228", country: "TG"},
    {code: "+216", country: "TN"},
    {code: "+90", country: "TR"},
    {code: "+993", country: "TM"},
    {code: "+256", country: "UG"},
    {code: "+380", country: "UA"},
    {code: "+971", country: "AE"},
    {code: "+44", country: "GB"},
    {code: "+1", country: "US"},
    {code: "+598", country: "UY"},
    {code: "+998", country: "UZ"},
    {code: "+58", country: "VE"},
    {code: "+84", country: "VN"},
    {code: "+967", country: "YE"},
    {code: "+260", country: "ZM"},
    {code: "+263", country: "ZW"}
];

// Google Sheets form submission URL
const scriptURL = "https://script.google.com/macros/s/AKfycbxRxgoUs5DQPEbHWoGI1weO6ysg46Y1OM2E-nMY2nTZ7ap_b66P6RfWljtEGDB53MQv/exec";

$(document).ready(function() {
    // Initialize all carousels with touch support
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carouselEl => {
        const carousel = new bootstrap.Carousel(carouselEl, {
            interval: 5000,
            touch: true,
            wrap: true
        });
    });
    
    // Phone number validation - allow only digits
    $('#phoneNumberModal, #phoneNumber').on('input', function() {
        // Remove any non-digit characters
        $(this).val($(this).val().replace(/\D/g, ''));
    });
    
    // Contact form submission (modal)
    $('#contactFormModal').on('submit', function(e) {
        e.preventDefault();
        
        // Validate phone number
        const phoneNumber = $('#phoneNumberModal').val();
        if(!/^\d+$/.test(phoneNumber)) {
            alert('Please enter a valid phone number (digits only)');
            $('#phoneNumberModal').focus();
            return false;
        }
        
        // Get form data
        const fullName = $('#fullNameModal').val();
        const countryCode = $('#contactFormModal .country-code').val();
        const companyName = $('#companyNameModal').val() || 'Not provided';
        const message = $('#messageModal').val();
        const whatsappNumber = countryCode + phoneNumber;
        
        // Get current date and time
        const now = new Date();
        const submissionTime = now.toLocaleString(); // Format: MM/DD/YYYY, HH:MM:SS AM/PM
        
        // Prepare data for Google Sheets
        let formData = {
            "Full Name": fullName,
            "WhatsApp Number": whatsappNumber,
            "Company Name": companyName,
            "Message": message,
            "Submission Time": submissionTime,
            "Form Source": "Contact Modal"
        };
        
        // Show loading state
        const submitBtn = $(this).find('button[type="submit"]');
        const originalBtnText = submitBtn.html();
        submitBtn.html('<i class="fas fa-spinner fa-spin me-2"></i>Submitting...');
        submitBtn.prop('disabled', true);
        
        // Submit to Google Sheets
        $.ajax({
            url: scriptURL,
            type: "POST",
            data: formData,
            contentType: "application/x-www-form-urlencoded",
            success: function(response) {
                console.log("Form submitted successfully", response);
                
                // Reset form and show success message
                $('#contactFormModal')[0].reset();
                alert('Thank you for contacting us! We will get back to you soon.');
                $('#contactModal').modal('hide');
                
                // Reset button
                submitBtn.html(originalBtnText);
                submitBtn.prop('disabled', false);
            },
            error: function(xhr, status, error) {
                console.error("AJAX Error:", error);
                alert('There was an error submitting the form. Please try again later.');
                
                // Reset button
                submitBtn.html(originalBtnText);
                submitBtn.prop('disabled', false);
            }
        });
    });
    
    // Handle footer contact button to open modal instead of scrolling
    $('.btn-contact-us').on('click', function(e) {
        e.preventDefault();
        $('#contactModal').modal('show');
    });
    
    // Prevent carousel from sliding when clicking on images that open modals
    $('.carousel .certificate-img, .carousel .gallery-img, .carousel .mark-img').on('click', function(e) {
        e.stopPropagation();
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });

    $('.back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });

    // Smooth scrolling for nav links
    $('a.nav-link').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
            
            // Close mobile menu when clicking a link
            if ($('.navbar-toggler').is(':visible')) {
                $('.offcanvas').offcanvas('hide');
            }
        }
    });

    // Active nav item on scroll
    $(window).scroll(function() {
        const scrollDistance = $(window).scrollTop();
        
        $('section').each(function(i) {
            if ($(this).position().top - 100 <= scrollDistance) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    });

    // Certificate image click handler
    $('.certificate-img').click(function() {
        // This is handled by Bootstrap's modal data attributes, but we can add custom behavior here if needed
    });

    // Prevent carousel from sliding when clicking on certificate images in mobile view
    $('.carousel .certificate-img').on('click', function(e) {
        e.stopPropagation();
    });

    // Gallery image click handler
    $('.gallery-img').click(function(e) {
        // This is handled by Bootstrap's modal data attributes
        e.stopPropagation();
    });

    // Prevent carousel from sliding when clicking on gallery images in mobile view
    $('.carousel .gallery-img').on('click', function(e) {
        e.stopPropagation();
    });
    
    // Populate country codes dropdown
    const countryCodeSelect = $('.country-code');
    
    // Clear existing options except the first one (India)
    countryCodeSelect.find('option:not(:first)').remove();
    
    // Sort country codes
    countryCodes.sort((a, b) => {
        if (a.code === "+91") return -1; // Keep India at the top
        if (b.code === "+91") return 1;
        return a.country.localeCompare(b.country);
    });
    
    // Add all country codes to the dropdown
    countryCodes.forEach(item => {
        if (item.code !== "+91") { // Skip India as it's already added
            countryCodeSelect.append(`<option value="${item.code}">${item.code} (${item.country})</option>`);
        }
    });
    
    // Contact form submission (footer)
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Validate phone number
        const phoneNumber = $('#phoneNumber').val();
        if(!/^\d+$/.test(phoneNumber)) {
            alert('Please enter a valid phone number (digits only)');
            $('#phoneNumber').focus();
            return false;
        }
        
        // Get form data
        const fullName = $('#fullName').val();
        const countryCode = $('#contactForm .country-code').val();
        const companyName = $('#companyName').val() || 'Not provided';
        const whatsappNumber = countryCode + phoneNumber;
        
        // Get current date and time
        const now = new Date();
        const submissionTime = now.toLocaleString(); // Format: MM/DD/YYYY, HH:MM:SS AM/PM
        
        // Prepare data for Google Sheets
        let formData = {
            "Full Name": fullName,
            "WhatsApp Number": whatsappNumber,
            "Company Name": companyName,
            "Submission Time": submissionTime,
            "Form Source": "Footer Form"
        };
        
        // Show loading state
        const submitBtn = $(this).find('button[type="submit"]');
        const originalBtnText = submitBtn.html();
        submitBtn.html('<i class="fas fa-spinner fa-spin me-2"></i>Submitting...');
        submitBtn.prop('disabled', true);
        
        // Submit to Google Sheets
        $.ajax({
            url: scriptURL,
            type: "POST",
            data: formData,
            contentType: "application/x-www-form-urlencoded",
            success: function(response) {
                console.log("Form submitted successfully", response);
                
                // Reset form and show success message
                $('#contactForm')[0].reset();
                alert('Thank you for contacting us! We will get back to you soon.');
                
                // Reset button
                submitBtn.html(originalBtnText);
                submitBtn.prop('disabled', false);
            },
            error: function(xhr, status, error) {
                console.error("AJAX Error:", error);
                alert('There was an error submitting the form. Please try again later.');
                
                // Reset button
                submitBtn.html(originalBtnText);
                submitBtn.prop('disabled', false);
            }
        });
    });
});









