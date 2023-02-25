$.ajax({
    url: 'https://gist.githubusercontent.com/PatilNikhilS/7951a74af476335fc4cf43b099e0e46b/raw/a31e27d44644697eca796ccfd32ec6c629032e14/review.json',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        var reviewsContainer = $('#reviews-container');
        
        $.each(data.review, function(index, review) {
            var reviewCard = $('<div>').addClass('review-card');
            var reviewUserImgAndID = $('<div>').addClass('review-img-id');
            var reviewImages = $('<div>').addClass('review-images');
            var reviewUserDetails = $('<div>').addClass('review-details');
            var reviewUserInfo = $('<div>').addClass('review-user-info');
            var reviewReview =$('<div>').addClass('revivew-ureview');
            var reviewTitleRating = $('<div>').addClass('review-title-rating');
            
            var reviewTitle = $('<h4>').text(review.title);
            var reviewDescription = $('<p>').text(review.description);
            var reviewImage = $('<img>').attr('src', review.image);
            var reviewRating = $('<span>').text('Rating: ' + review.rating + '/5');
            var reviewUser = $('<h3>').text(' '+review.username);
            var reviewUserID = $('<p>').text('@'+ review.userId);
          
            reviewUserInfo.append(reviewUser, reviewUserID);
            reviewTitleRating.append(reviewTitle, reviewRating, reviewDescription);
            reviewCard.append(reviewUserImgAndID, reviewReview);
            reviewUserImgAndID.append(reviewImages, reviewUserDetails)
            reviewImages.append(reviewImage);
            reviewUserDetails.append(reviewUserInfo, reviewUserInfo);
            reviewReview.append(reviewTitleRating)
            reviewsContainer.append(reviewCard);
          });
          
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
    }
});