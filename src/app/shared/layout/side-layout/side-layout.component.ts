import { Component, OnInit } from "@angular/core";

interface NavItem {
  title: string;
  path: string;
  icon?: string;
  child?: NavItem[]
}

const NavData: NavItem[] = [
  {title: "Dashboard", path: "dashboard", icon: "dashboard", child: [{title: "Analysis", path: "analysis"}]},
  {title: "详情页", path: "detail", icon: "book", child: [{title: "基本详情页", path: "basic-detail"}]},
  {title: "编辑页", path: "editor", icon: "edit", child: [{title: "富文本编辑", path: "flow"}]},
  {title: "表单页", path: "form", icon: "form", child: [{title: "基本表单页", path: "basic-form"}]},
  {title: "列表页", path: "list", icon: "database", child: [{title: "简单列表页", path: "basic-list"}]},
  {title: "结果页", path: "result", icon: "wallet", child: [{title: "成功页", path: "success"}, {title: "失败页", path: "fail"}]},
  {title: "用户中心", path: "user", icon: "user", child: [{title: "用户中心", path: "user-center"}]}
];

@Component({
  selector: "app-side-layout",
  templateUrl: "./side-layout.component.html",
  styleUrls: ["./side-layout.component.scss"]
})
export class SideLayoutComponent implements OnInit {
  isCollapsed = false;
  sideNavList: NavItem[] = [];

  constructor() { }

  ngOnInit(): void {
    const res = [];
    NavData.forEach(el => {
      const group = {title: el.title, icon: el.icon, path: el.path, child: []}
      el.child?.forEach(item => {
        group.child.push(
          {
            title: item.title,
            path: `/${el.path}/${item.path}`
          }
        )
      });
      res.push(group);
    });
    this.sideNavList = res;
  }
}
