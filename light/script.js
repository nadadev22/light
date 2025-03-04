const lightSlider = document.getElementById("lightSlider");

lightSlider.addEventListener("input", () => {
    const value = lightSlider.value;

    // تغيير لون الخلفية بالكامل بناءً على قيمة الشريط
    const color = `rgb(${value * 255}, ${value * 255}, ${value * 255})`; // تحويل القيمة إلى لون رمادي
    document.body.style.backgroundColor = color; // تغيير لون الخلفية
});
