const HousingImage = '<img src="https://images.squarespace-cdn.com/content/v1/604a0103c98ac757321613a7/0f8adbf2-9ef3-463d-8e01-cb7085b04418/001Dharavi-pipe-09-EDIT.jpg?format=2500w" />'

const FoodImage = '<img src="https://www.prb.org/wp-content/uploads/2014/09/2014-india-stuntied-children.jpg" />'

const WealthImage = '<img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/23/Photos/Processed/g-capacc-kEyB--621x414@LiveMint.jpg" />'

function setImage(imageHtml) {
    $('#right').empty().prepend(imageHtml)
}
$('.Housing').on('click', function () {
    setImage(HousingImage)
})

$('.Food').on('click', function () {
    setImage(FoodImage)
})

$('.Wealth').on('click', function () {
    setImage(WealthImage)
})

