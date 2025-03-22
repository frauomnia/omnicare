

export default function CarouselDisplay() {

return (
    // reference: https://daisyui.com/components/carousel/#slide4
<div className="carousel carousel-center bg-[#F1E6D0] rounded-box w-[70%] space-x-4 p-4 mt-8 ml-auto mr-auto">
<div className="carousel-item w-[100%] relative">
  <div className="absolute">
    <p>Our mission</p>
    <p>Our goal is to help refugees find medical volunteers.</p>
  </div>
  <img
    src="/images/avocado.jpg"
    className="rounded-box" />
</div>
<div className="carousel-item w-[100%] relative">
<div className="absolute">
<p>Our mission</p>
    <p>Our goal is to help break language barrier between patient and medical care provider.</p>
  </div>
  <img
    src="/images/one-finger.jpg"
    className="rounded-box" />
</div>
<div className="carousel-item w-[100%] relative">
<div className="absolute">
<p>Our mission</p>
    <p>Our goal is to help break cultural barrier between patient and medical care provider.</p>
  </div>
  <img
    src="/images/two-thumbs.jpg"
    className="rounded-box" />
</div>
<div className="carousel-item w-[100%] relative">
<div className="absolute">
<p>Our mission</p>
    <p>Our goal is to help refugees regain power with medical care.</p>
  </div>
  <img
    src="/images/power.jpg "
    className="rounded-box" />
</div>
<div className="carousel-item w-[100%] relative">
<div className="absolute">
    <p>Our mission</p>
    <p>Our goal is to help spread peace and love.</p>

  </div>
  <img
    src="/images/peace.jpg"
    className="rounded-box" />
</div>
</div>
)
}
