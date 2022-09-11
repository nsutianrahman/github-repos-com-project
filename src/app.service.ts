import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /// Here first value of each row will map to github repo of corresponding template of second value.
  // so for example, if we have "py" then corresponding sample code will be at "github.com/company-user-name/py"
  // so for example, if we have "reactjs" then corresponding sample code will be at "github.com/company-user-name/reactjs"
  static templateMapping = [
    { route: 'cpp', lang: 'C++' },
    { route: 'py', lang: 'Python' },
    { route: 'reactjs', lang: 'React' },
  ];

  getTemplateInfo(): any {
    return AppService.templateMapping;
  }
}
