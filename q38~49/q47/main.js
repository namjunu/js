function cat(){
    this.name = "";
    this.age = 1;
    this.weight = 500;
    this.family = "페르시아고양이";
    this.color = "흰색";
}

var kitty = new cat();
kitty.name = "야옹이";
kitty.age = 2;
kitty.weight = 500;
kitty.family = "사향고양이";
kitty.color = "갈색";

dw(kitty.name);
br();
dw(kitty.age);
br();
dw(kitty.weight);
br();
dw(kitty.family);
br();
dw(kitty.color);
