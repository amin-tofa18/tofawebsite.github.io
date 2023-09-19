function kirim(){
    const jno1 = document.querySelector("#jno1")
    const jno2 = document.querySelector("#jno2")
    const jno3 = document.querySelector("#jno3")
    const jno4 = document.querySelector("#jno4")
    const jno5 = document.querySelector("#jno5")
    const jno6 = document.querySelector("#jno6")
    const jno7 = document.querySelector("#jno7")
    const jno8 = document.querySelector("#jno8")
    const jno9 = document.querySelector("#jno9")
    const jno10 = document.querySelector("#jno10")


    const rno1 = document.querySelector("#rno1")
    const rno2 = document.querySelector("#rno2")
    const rno3 = document.querySelector("#rno3")
    const rno4 = document.querySelector("#rno4")
    const rno5 = document.querySelector("#rno5")
    const rno6 = document.querySelector("#rno6")
    const rno7 = document.querySelector("#rno7")
    const rno8 = document.querySelector("#rno8")
    const rno9 = document.querySelector("#rno9")
    const rno10 = document.querySelector("#rno10")

    const nilai = document.querySelector("#nilai")

    let response
    let poin = 0
    // no 1
    if (jno1.checked){
        response = "Jawaban Kamu Benar"
        rno1.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: lightgreen; width: 200px;"
        poin = poin + 10
    }else {
        response = "Jawaban Kamu Salah"
        rno1.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: rgb(255, 88, 88); width: 200px;"
    }
    rno1.innerHTML = response

    // no 2
    if (jno2.checked){
        response = "Jawaban Kamu Benar"
        rno2.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: lightgreen; width: 200px;"
        poin = poin + 10
    }else {
        response = "Jawaban Kamu Salah"
        rno2.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: rgb(255, 88, 88); width: 200px;"
    }
    rno2.innerHTML = response

    // no 3
    if (jno3.checked){
        response = "Jawaban Kamu Benar"
        rno3.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: lightgreen; width: 200px;"
        poin = poin + 10
    }else {
        response = "Jawaban Kamu Salah"
        rno3.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: rgb(255, 88, 88); width: 200px;"
    }
    rno3.innerHTML = response

    // no 4
    if (jno4.checked){
        response = "Jawaban Kamu Benar"
        rno4.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: lightgreen; width: 200px;"
        poin = poin + 10
    }else {
        response = "Jawaban Kamu Salah"
        rno4.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: rgb(255, 88, 88); width: 200px;"
    }
    rno4.innerHTML = response

    // no 5
    if (jno5.checked){
        response = "Jawaban Kamu Benar"
        rno5.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: lightgreen; width: 200px;"
        poin = poin + 10
    }else {
        response = "Jawaban Kamu Salah"
        rno5.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: rgb(255, 88, 88); width: 200px;"
    }
    rno5.innerHTML = response

    // no 6
    if (jno6.checked){
        response = "Jawaban Kamu Benar"
        rno6.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: lightgreen; width: 200px;"
        poin = poin + 10
    }else {
        response = "Jawaban Kamu Salah"
        rno6.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: rgb(255, 88, 88); width: 200px;"
    }
    rno6.innerHTML = response

    // no 7
    if (jno7.checked){
        response = "Jawaban Kamu Benar"
        rno7.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: lightgreen; width: 200px;"
        poin = poin + 10
    }else {
        response = "Jawaban Kamu Salah"
        rno7.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: rgb(255, 88, 88); width: 200px;"
    }
    rno7.innerHTML = response

    // no 8
    if (jno8.checked){
        response = "Jawaban Kamu Benar"
        rno8.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: lightgreen; width: 200px;"
        poin = poin + 10
    }else {
        response = "Jawaban Kamu Salah"
        rno8.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: rgb(255, 88, 88); width: 200px;"
    }
    rno8.innerHTML = response

    // no 9
    if (jno9.checked){
        response = "Jawaban Kamu Benar"
        rno9.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: lightgreen; width: 200px;"
        poin = poin + 10
    }else {
        response = "Jawaban Kamu Salah"
        rno9.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: rgb(255, 88, 88); width: 200px;"
    }
    rno9.innerHTML = response

    // no 10
    if (jno10.checked){
        response = "Jawaban Kamu Benar"
        rno10.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: lightgreen; width: 200px;"
        poin = poin + 10
    }else {
        response = "Jawaban Kamu Salah"
        rno10.style = "font-weight: 400; margin-left: 1%; color: black; border-radius: 5px; padding: 5px; background-color: rgb(255, 88, 88); width: 200px;"
    }
    rno10.innerHTML = response
    nilai.innerHTML= poin

    const pmbhsn = document.getElementById("pembahasan");
    pmbhsn.style = "display: inline-block; margin-top: 16px;"
}