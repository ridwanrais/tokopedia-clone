import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useEffect, useState } from "react";

function MidSection() {
  const categoryChoices = [
    "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/12/3127195/3127195_c3f49fbe-8b16-4b93-9ca2-3f89fb0506a4.jpg.webp?ect=4g",
    "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/12/3127195/3127195_2fb97bc9-e5e8-47c9-9d66-d49a60f2bc6f.png.webp?ect=4g",
    "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/11/3127195/3127195_2883bb63-8f91-4c9c-a423-d68b22e51b78.jpg.webp?ect=4g",
    "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/21/8470985/8470985_090882d9-32fb-4437-9bef-f50ad3e831af.png.webp?ect=4g",
    "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp?ect=4g",
    "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg.webp?ect=4g",
  ];

  const topupButtonStyle =
    "grid place-items-center w-full text-sm opacity-60 border-b-2 border-transparent hover:text-green-600 hover:opacity-100  focus:text-green-600 focus:opacity-100 focus:border-solid focus:border-green-500 focus:outline-none";

  const categoryProperties = {
    transitionDuration: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    easing: "cubic",
  };

  const [topup, setTopup] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nominal, setNominal] = useState("");

  useEffect(() => {
    setNominal("");
  }, [topup]);

  const handleChangePhoneNumber = (event) => setPhoneNumber(event.target.value);

  const handleChangeNominal = (event) => setNominal(event.target.value);

  const isPhoneNumberEmpty = () => {
    return (
      phoneNumber.toString().charAt(0) != 0 ||
      phoneNumber.toString().charAt(1) != 8 ||
      phoneNumber.length < 4
    );
  };

  return (
    <div className="p-4 rounded-md shadow-md h-52 w-full border flex items-start">
      <div className="selectedCategories w-1/2 mx-1">
        <h1 className="font-bold opacity-80 text-2xl mb-4">Kategori Pilihan</h1>
        <Slide className="selectedCategories__choices" {...categoryProperties}>
          {categoryChoices.map((image, index) => (
            <div className="p-1 mx-1 rounded-xl border">
              <img src={image} alt="" />
            </div>
          ))}
        </Slide>
      </div>

      <div className="topup w-1/2 mx-1">
        <h1 className="font-bold opacity-80 text-2xl mb-4">Top Up & Tagihan</h1>
        <div className="topup__box p-1 mx-1 rounded-xl border">
          <div className="topup__serviceTitles flex border-b h-1/4">
            <button
              className={topupButtonStyle}
              onClick={() => setTopup("Pulsa")}
            >
              Pulsa
            </button>
            <button
              className={topupButtonStyle}
              onClick={() => setTopup("Paket Data")}
            >
              Paket Data
            </button>
            <button
              className={topupButtonStyle}
              onClick={() => setTopup("Listrik PLN")}
            >
              Listrik PLN
            </button>
            <button
              className={topupButtonStyle}
              onClick={() => setTopup("Flight")}
            >
              Flight
            </button>
          </div>
          <div className="topup__pulsaAndPaket h-20 grid place-items-center">
            <form className="flex items-center justify-center">
              <div className="phoneNumber ml-1 p-1 w-1/2">
                <h5 className="text-sm opacity-80">Nomor Telepon</h5>
                <input
                  className=" h-9 w-full bg-transparent text-sm border-2 border-gray-300 border-opacity-75 rounded-xl px-3 opacity-50 focus:outline-none focus:border-green-500 focus:opacity-100"
                  type="text"
                  placeholder="081234567890"
                  pattern="[0]{1}[8]{1}[0-9]{10}"
                  onChange={handleChangePhoneNumber}
                  value={phoneNumber}
                  required
                />
              </div>

              <div className="nominal ml-1 p-1 w-1/2">
                <h5 className="text-sm opacity-80">Nominal</h5>
                {topup === "Pulsa" ? (
                  <select
                    className="h-9 w-full bg-transparent text-sm border-2 border-gray-300 border-opacity-75 rounded-xl px-3 opacity-50 cursor-pointer focus:outline-none focus:border-green-500 focus:opacity-100"
                    list="nominal"
                    disabled={isPhoneNumberEmpty()}
                    required
                    onChange={handleChangeNominal}
                    value={nominal}
                    id="nominal"
                  >
                    <option>10.000 - Rp11.500</option>
                    <option>12.000 - Rp12.000</option>
                    <option>15.000 - Rp15.000</option>
                    <option>20.000 - Rp20.300</option>
                    <option>25.000 - Rp25.000</option>
                    <option>30.000 - Rp30.000</option>
                    <option>50.000 - Rp50.000</option>
                    <option>100.000 - Rp100.000</option>
                  </select>
                ) : (
                  <select
                    className="h-9 w-full bg-transparent text-sm border-2 border-gray-300 border-opacity-75 rounded-xl px-3 opacity-50 cursor-pointer focus:outline-none focus:border-green-500 focus:opacity-100"
                    list="nominal"
                    disabled={isPhoneNumberEmpty()}
                    required
                    onChange={handleChangeNominal}
                    value={nominal}
                    id="nominal"
                  >
                    <option>
                      Freedom U 1GB+4.5GB Apps / 30 Hari - Rp25.000
                    </option>
                  </select>
                )}
              </div>

              <button className="topup__payButton relative top-3 right-3 h-9 space-x-1 ml-5 p-2 opacity-50 text-xs hover:text-green-600 hover:opacity-100 focus:outline-none bg-gray-200 focus:text-green-600 focus:opacity-100 rounded-md">
                Bayar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidSection;
