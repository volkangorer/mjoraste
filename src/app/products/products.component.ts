import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Products, ProductsService} from "./products.service";
import {GetAllProductByCategoryIdResponse} from "../model/getAllProductByCategoryIdResponse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public productsByCategoryId?: GetAllProductByCategoryIdResponse[];

  public categoryName?: string;

  productsList!:ProductModel[];

  constructor(private router: Router,private route: ActivatedRoute,private activatedRouter: ActivatedRoute, private productsService: ProductsService) {
  }
  ngOnInit() {
    let key:String = "";

    this.route.params.subscribe({
      next: (param) => {


        key = param['searchInput'];

        if (key != undefined){
          console.log(param['searchInput']);
          //arama kelimesi ile backende sorgu gönder ve products component içinde döndür
          this.productsService.getProductsBySearchInputId(key).subscribe((data) => {
            console.log(data);
            console.log(data.data[0]);

            this.productsList = data.data;


          })
        }else{
          const categoryId: number = Number(this.activatedRouter.snapshot.paramMap.get('id'))
          this.productsService.getProductsByCategoryId(categoryId).subscribe((data) => {
            console.log(data);
            this.productsByCategoryId = data
            if (data && data.length > 0) {
              this.categoryName = data[0].categoryName
            }
          })
        }


      }
    })


  }

  goToProductDetail(id:any){
    this.router.navigate([`products/detail/productId/${id}`]);
  }

}

export interface ProductModel{

      brandName: string,
      id: number,
      images: [
        {
          imageUrl: string
        }
      ],
      name: string,
      price: number


}

