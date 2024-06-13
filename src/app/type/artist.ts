/*export interface Artist {
    name:string,
    img:string,
    visibility: true
}*/

export class Artist {
    name:string
    img:string
    visibility = true

    constructor(name?:string, img?:string){
        this.name = name || ""
        this.img= img || ""
    }
    
    setVisibility(visibility?:boolean) {
      this.visibility = !this.visibility || visibility!
      console.log("visibility")
    }
}
