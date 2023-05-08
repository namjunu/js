function cat(){
    this.name = "";
    this.age = 1;
    this.weight = 500;
    this.family = "페르시아고양이";
    this.color = "흰색";
}

var kitty = new cat();
kitty.name = "야옹이";

dw(kitty.name);
