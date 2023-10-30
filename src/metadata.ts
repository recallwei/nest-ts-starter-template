/* eslint-disable */
export default async () => {
  const t = {
    ['./users/dto/update-user.dto']: await import(
      './users/dto/update-user.dto'
    ),
    ['./files/vo/file.vo']: await import('./files/vo/file.vo'),
    ['./departments/dto/create-department.dto']: await import(
      './departments/dto/create-department.dto'
    ),
    ['./departments/dto/update-department.dto']: await import(
      './departments/dto/update-department.dto'
    ),
    ['./dictionaries/dto/create-dictionary.dto']: await import(
      './dictionaries/dto/create-dictionary.dto'
    ),
    ['./dictionaries/dto/update-dictionary.dto']: await import(
      './dictionaries/dto/update-dictionary.dto'
    ),
    ['./dictionary-items/dto/create-dictionary-item.dto']: await import(
      './dictionary-items/dto/create-dictionary-item.dto'
    ),
    ['./dictionary-items/dto/update-dictionary-item.dto']: await import(
      './dictionary-items/dto/update-dictionary-item.dto'
    ),
    ['./menu-items/dto/create-menu-item.dto']: await import(
      './menu-items/dto/create-menu-item.dto'
    ),
    ['./menu-items/dto/update-menu-item.dto']: await import(
      './menu-items/dto/update-menu-item.dto'
    ),
    ['./notifications/dto/create-notification.dto']: await import(
      './notifications/dto/create-notification.dto'
    ),
    ['./notifications/dto/update-notification.dto']: await import(
      './notifications/dto/update-notification.dto'
    ),
    ['./positions/dto/create-position.dto']: await import(
      './positions/dto/create-position.dto'
    ),
    ['./positions/dto/update-position.dto']: await import(
      './positions/dto/update-position.dto'
    ),
    ['./settings/dto/create-setting.dto']: await import(
      './settings/dto/create-setting.dto'
    ),
    ['./settings/dto/update-setting.dto']: await import(
      './settings/dto/update-setting.dto'
    ),
    ['./user-traffic-records/dto/create-user-traffic-record.dto']: await import(
      './user-traffic-records/dto/create-user-traffic-record.dto'
    ),
    ['./user-traffic-records/dto/update-user-traffic-record.dto']: await import(
      './user-traffic-records/dto/update-user-traffic-record.dto'
    ),
    ['./user-traffics/dto/create-user-traffic.dto']: await import(
      './user-traffics/dto/create-user-traffic.dto'
    ),
    ['./user-traffics/dto/update-user-traffic.dto']: await import(
      './user-traffics/dto/update-user-traffic.dto'
    )
  }
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('./common/class/dto/page.dto'),
          {
            PageDto: {
              page: { required: true, type: () => Number, minimum: 1 },
              pageSize: { required: true, type: () => Number, minimum: 1 },
              searchText: { required: false, type: () => String }
            }
          }
        ],
        [
          import('./common/class/dto/page-date.dto'),
          {
            PageDateDto: {
              startTime: { required: false, type: () => Date },
              endTime: { required: false, type: () => Date }
            }
          }
        ],
        [
          import('./users/dto/create-user.dto'),
          {
            CreateUserDto: {
              username: { required: true, type: () => String },
              password: { required: true, type: () => String }
            }
          }
        ],
        [import('./users/dto/update-user.dto'), { UpdateUserDto: {} }],
        [
          import('./auth/dto/login.dto'),
          {
            LoginDto: {
              username: {
                required: true,
                type: () => String,
                minLength: 4,
                maxLength: 16
              },
              password: {
                required: true,
                type: () => String,
                minLength: 6,
                maxLength: 16
              }
            }
          }
        ],
        [
          import('./departments/dto/create-department.dto'),
          { CreateDepartmentDto: {} }
        ],
        [
          import('./departments/dto/update-department.dto'),
          { UpdateDepartmentDto: {} }
        ],
        [
          import('./dictionaries/dto/create-dictionary.dto'),
          { CreateDictionaryDto: {} }
        ],
        [
          import('./dictionaries/dto/update-dictionary.dto'),
          { UpdateDictionaryDto: {} }
        ],
        [
          import('./dictionary-items/dto/create-dictionary-item.dto'),
          { CreateDictionaryItemDto: {} }
        ],
        [
          import('./dictionary-items/dto/update-dictionary-item.dto'),
          { UpdateDictionaryItemDto: {} }
        ],
        [
          import('./menu-items/dto/create-menu-item.dto'),
          { CreateMenuItemDto: {} }
        ],
        [
          import('./menu-items/dto/update-menu-item.dto'),
          { UpdateMenuItemDto: {} }
        ],
        [
          import('./notifications/dto/create-notification.dto'),
          { CreateNotificationDto: {} }
        ],
        [
          import('./notifications/dto/update-notification.dto'),
          { UpdateNotificationDto: {} }
        ],
        [
          import('./permissions/dto/create-permission.dto'),
          { CreatePermissionDto: {} }
        ],
        [
          import('./permissions/dto/update-permission.dto'),
          { UpdatePermissionDto: {} }
        ],
        [
          import('./positions/dto/create-position.dto'),
          { CreatePositionDto: {} }
        ],
        [
          import('./positions/dto/update-position.dto'),
          { UpdatePositionDto: {} }
        ],
        [import('./roles/dto/create-role.dto'), { CreateRoleDto: {} }],
        [import('./roles/dto/update-role.dto'), { UpdateRoleDto: {} }],
        [import('./settings/dto/create-setting.dto'), { CreateSettingDto: {} }],
        [import('./settings/dto/update-setting.dto'), { UpdateSettingDto: {} }],
        [
          import('./user-traffic-records/dto/create-user-traffic-record.dto'),
          { CreateUserTrafficRecordDto: {} }
        ],
        [
          import('./user-traffic-records/dto/update-user-traffic-record.dto'),
          { UpdateUserTrafficRecordDto: {} }
        ],
        [
          import('./user-traffics/dto/create-user-traffic.dto'),
          { CreateUserTrafficDto: {} }
        ],
        [
          import('./user-traffics/dto/update-user-traffic.dto'),
          { UpdateUserTrafficDto: {} }
        ],
        [
          import('./departments/entities/department.entity'),
          { Department: {} }
        ],
        [
          import('./dictionaries/entities/dictionary.entity'),
          { Dictionary: {} }
        ],
        [
          import('./dictionary-items/entities/dictionary-item.entity'),
          { DictionaryItem: {} }
        ],
        [import('./menu-items/entities/menu-item.entity'), { MenuItem: {} }],
        [
          import('./notifications/entities/notification.entity'),
          { Notification: {} }
        ],
        [
          import('./permissions/entities/permission.entity'),
          { Permission: {} }
        ],
        [import('./positions/entities/position.entity'), { Position: {} }],
        [import('./roles/entities/role.entity'), { Role: {} }],
        [import('./settings/entities/setting.entity'), { Setting: {} }],
        [
          import('./user-traffic-records/entities/user-traffic-record.entity'),
          { UserTrafficRecord: {} }
        ],
        [
          import('./user-traffics/entities/user-traffic.entity'),
          { UserTraffic: {} }
        ]
      ],
      controllers: [
        [
          import('./app.controller'),
          {
            AppController: {
              getApp: {},
              getVersion: {},
              getRedirect: {},
              getCurrentLang: {}
            }
          }
        ],
        [
          import('./users/users.controller'),
          {
            UsersController: {
              create: {},
              findMany: {},
              findCurrent: {},
              findOne: {},
              update: { type: t['./users/dto/update-user.dto'].UpdateUserDto },
              remove: { type: String }
            }
          }
        ],
        [
          import('./auth/auth.controller'),
          { AuthController: { login: { type: Object } } }
        ],
        [
          import('./cos/cos.controller'),
          {
            CosController: {
              uploadToCos: { type: [t['./files/vo/file.vo'].FileVo] }
            }
          }
        ],
        [
          import('./departments/departments.controller'),
          {
            DepartmentsController: {
              create: {
                type: t['./departments/dto/create-department.dto']
                  .CreateDepartmentDto
              },
              findAll: { type: String },
              findOne: { type: String },
              update: {
                type: t['./departments/dto/update-department.dto']
                  .UpdateDepartmentDto
              },
              remove: { type: String }
            }
          }
        ],
        [
          import('./dictionaries/dictionaries.controller'),
          {
            DictionariesController: {
              create: {
                type: t['./dictionaries/dto/create-dictionary.dto']
                  .CreateDictionaryDto
              },
              findMany: {},
              findOne: { type: String },
              update: {
                type: t['./dictionaries/dto/update-dictionary.dto']
                  .UpdateDictionaryDto
              },
              remove: { type: String }
            }
          }
        ],
        [
          import('./dictionary-items/dictionary-items.controller'),
          {
            DictionaryItemsController: {
              create: {
                type: t['./dictionary-items/dto/create-dictionary-item.dto']
                  .CreateDictionaryItemDto
              },
              findAll: { type: String },
              findOne: { type: String },
              update: {
                type: t['./dictionary-items/dto/update-dictionary-item.dto']
                  .UpdateDictionaryItemDto
              },
              remove: { type: String }
            }
          }
        ],
        [
          import('./files/files.controller'),
          {
            FilesController: {
              upload: { type: [t['./files/vo/file.vo'].FileVo] },
              download: {},
              findOne: {}
            }
          }
        ],
        [
          import('./menu-items/menu-items.controller'),
          {
            MenuItemsController: {
              create: {
                type: t['./menu-items/dto/create-menu-item.dto']
                  .CreateMenuItemDto
              },
              findAll: { type: String },
              findOne: { type: String },
              update: {
                type: t['./menu-items/dto/update-menu-item.dto']
                  .UpdateMenuItemDto
              },
              remove: { type: String }
            }
          }
        ],
        [
          import('./notifications/notifications.controller'),
          {
            NotificationsController: {
              create: {
                type: t['./notifications/dto/create-notification.dto']
                  .CreateNotificationDto
              },
              findAll: { type: String },
              findOne: { type: String },
              update: {
                type: t['./notifications/dto/update-notification.dto']
                  .UpdateNotificationDto
              },
              remove: { type: String }
            }
          }
        ],
        [
          import('./permissions/permissions.controller'),
          {
            PermissionsController: {
              create: { type: String },
              findAll: { type: String },
              findOne: { type: String },
              update: { type: String },
              remove: { type: String }
            }
          }
        ],
        [
          import('./positions/positions.controller'),
          {
            PositionsController: {
              create: {
                type: t['./positions/dto/create-position.dto'].CreatePositionDto
              },
              findAll: { type: String },
              findOne: { type: String },
              update: {
                type: t['./positions/dto/update-position.dto'].UpdatePositionDto
              },
              remove: { type: String }
            }
          }
        ],
        [
          import('./roles/roles.controller'),
          {
            RolesController: {
              create: { type: String },
              findAll: { type: String },
              findOne: { type: String },
              update: { type: String },
              remove: { type: String }
            }
          }
        ],
        [
          import('./settings/settings.controller'),
          {
            SettingsController: {
              create: {
                type: t['./settings/dto/create-setting.dto'].CreateSettingDto
              },
              findAll: { type: String },
              findOne: { type: String },
              update: {
                type: t['./settings/dto/update-setting.dto'].UpdateSettingDto
              },
              remove: { type: String }
            }
          }
        ],
        [
          import('./user-traffic-records/user-traffic-records.controller'),
          {
            UserTrafficRecordsController: {
              create: {
                type: t[
                  './user-traffic-records/dto/create-user-traffic-record.dto'
                ].CreateUserTrafficRecordDto
              },
              findAll: { type: String },
              findOne: { type: String },
              update: {
                type: t[
                  './user-traffic-records/dto/update-user-traffic-record.dto'
                ].UpdateUserTrafficRecordDto
              },
              remove: { type: String }
            }
          }
        ],
        [
          import('./user-traffics/user-traffics.controller'),
          {
            UserTrafficsController: {
              create: {
                type: t['./user-traffics/dto/create-user-traffic.dto']
                  .CreateUserTrafficDto
              },
              findAll: { type: String },
              findOne: { type: String },
              update: {
                type: t['./user-traffics/dto/update-user-traffic.dto']
                  .UpdateUserTrafficDto
              },
              remove: { type: String }
            }
          }
        ]
      ]
    }
  }
}
