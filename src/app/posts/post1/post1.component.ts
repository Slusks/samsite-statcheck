import { Component, OnInit } from '@angular/core';
import  * as Tableau from 'tableau-api-js';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.scss']
})
export class Post1Component implements OnInit {


  constructor() {}

  public initViz(vizURL, container): void {
    const containerDiv = container;
    const vizUrl = vizURL;
    const options = {
      width: containerDiv.offsetWidth,
      height: 700
    };

    var viz = new Tableau.Viz(containerDiv, vizUrl, options);
  }

  ngOnInit() {
    this.initViz('https://public.tableau.com/views/AvgKDAComparison_9-26-2020/KDAComparison?:language=en&:display_count=y&:origin=viz_share_link', document.getElementById("KDADashboard"));
    this.initViz('https://public.tableau.com/views/AvgKDAComparison_9-26-2020/AvgDmgShareComparison?:language=en&:display_count=y&:origin=viz_share_link', document.getElementById("AvgDmgShareDashboard"));
    this.initViz('https://public.tableau.com/views/AvgKDAComparison_9-26-2020/AvgGoldShareComparison?:language=en&:display_count=y&:origin=viz_share_link', document.getElementById("AvgGoldShareDashboard"));
    this.initViz('https://public.tableau.com/views/SolovsLCSKDAParticipation/AvgKPComparison?:language=en&:display_count=y&:origin=viz_share_link', document.getElementById("AvgKillParticipationDashboard"));
    this.initViz('https://public.tableau.com/views/SoloLaningStats/LaningAt10?:language=en&:display_count=y&:origin=viz_share_link', document.getElementById("LaningAt10"));
    this.initViz('https://public.tableau.com/views/SoloLaningStats/LaningAt15?:language=en&:display_count=y&:origin=viz_share_link', document.getElementById("LaningAt15"));

    
  }

}
