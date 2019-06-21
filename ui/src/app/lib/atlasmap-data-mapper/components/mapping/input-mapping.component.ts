/*
    Copyright (C) 2019 Red Hat, Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

            http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { Component, Input } from '@angular/core';

import { ConfigModel } from '../../models/config.model';
import { MappingModel } from '../../models/mapping.model';
import { DocumentDefinition } from '../../models/document-definition.model';

@Component({
  selector: 'input-mapping',
  templateUrl: './input-mapping.component.html',
})

export class InputMappingComponent {
  @Input() cfg: ConfigModel;
  @Input() isSource = false;
  @Input() mapping: MappingModel;


  createInputMappedField(): void {
    if (!this.mapping.hasNoneField(this.isSource)) {
      this.mapping.addField(DocumentDefinition.getNoneField(), this.isSource, true);
      this.cfg.mappingService.updateMappedField(this.mapping, this.isSource, false);
    }
  }

}
