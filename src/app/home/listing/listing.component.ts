import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { CellbtnComponent } from '../cellbtn/cellbtn.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { mergeMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private CommonService:CommonService,private router:Router,private modalService: NgbModal,private toaster:ToastrService) { }
  title = 'AddNewStock'; 
  selectedRow; 
  rowHeight;
  rowStyle;
  dataTodelete;
  closeResult: string;
  stocks: any = [];
  rowData: any [];
  res: any;
  modalRef;
  @ViewChild('confirm', { static: false }) private confirm;
  public frameworkComponents;
  columnDefs = [
    {headerName: 'Company', field:'company', sortable:true,filter:true, width:'120px'},
    {headerName: 'Symbol', field:'symbol', sortable:true,filter:true, width:'120px'},
    {headerName: 'Initial Price', field:'initial_price', sortable:true,filter:true, width:'120px'},
    {headerName: 'price 2002', field:'price_2002', sortable:true,filter:true, width:'120px'},
    {headerName: 'price 2007', field:'price_2007', sortable:true,filter:true, width:'100px'},
    {headerName: 'Action', field:'action', width:'144px', cellRenderer:"customizedCell"}

  ];
  open(content) {
    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  savetoJSON(saveStock){
    let symbol =  this.rowData.find(t=>t.symbol == saveStock.value.symbol);
    if(!symbol){
      this.CommonService.addSymbol(saveStock).pipe(
        mergeMap(stockVal => this.CommonService.getStockListing())
      ).subscribe(resp => {
        this.res = resp; 
        this.rowData = this.res;
        this.modalRef.close();
        this.toaster.success("Symbol added successfully");
      });
    }else{
      this.toaster.error('Try different symbol', 'Symbol Exists!');
    }
    
  }
  ngOnInit(): void {
    this.rowHeight = 50;
    this.rowStyle = { padding: '4px' };
    this.CommonService.getStockListing().subscribe((res:any)=>{
      this.rowData = res;
    });
    this.frameworkComponents = {
      customizedCell : CellbtnComponent
    }
  }
  delete(){
    this.CommonService.deleteSymbol(this.dataTodelete.id).pipe(
      mergeMap(stockVal => this.CommonService.getStockListing())
    ).subscribe(resp => {
      this.res = resp; 
      this.rowData = this.res;
      this.modalRef.close();
      this.toaster.success("Symbol deleted successfully");
    });
  }
  cancelAction(){
    this.modalRef.close();
    this.dataTodelete = '';
  }
  onRowClick(event: any){
    debugger;
    this.selectedRow = event.data;
    if(event.event.target.nodeName == "BUTTON" ){
      this.dataTodelete = this.selectedRow;
      this.open(this.confirm);
    }else{
      this.router.navigate(['home/detail',this.selectedRow.id]);
    }
    
  }
}

