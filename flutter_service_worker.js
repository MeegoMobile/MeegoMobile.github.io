'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "60f169449420d2b3fa373f0499ee8b43",
"index.html": "9a92d7f1820966c31e72ff21cfb8b195",
"/": "9a92d7f1820966c31e72ff21cfb8b195",
"main.dart.js": "c860638ed3602ba62f3e7461f51060e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e207639b905b961ff3bbcb7196e6b9b6",
"assets/AssetManifest.json": "bfd871f25680dc3c0cdf913faeaba852",
"assets/NOTICES": "cd340c56490c7152fa896fcb47ec80dd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/meego_common_ui/assets/images/app_icon/icon_meego_outlined.webp": "d9cc60dca412cdecca71ea3b49907f77",
"assets/packages/meego_common_ui/assets/images/app_icon/icon_lark_outlined.webp": "2cfe598c5e55abed705e61b553187cde",
"assets/packages/meego_common_ui/assets/images/app_icon/icon_lark_logo_filled.webp": "323ba3b45ca2e86be55b40280e2647bc",
"assets/packages/meego_common_ui/assets/images/app_icon/icon_meego_filled.webp": "488111207e7de06c5ae6c1cc8e19eb6a",
"assets/packages/meego_common_ui/assets/images/meego_more_hori.webp": "41852122f18602381b002195cdbec4f9",
"assets/packages/meego_common_ui/assets/images/meego_go.webp": "b4f9f5d415ebc724be88ea40019ffe70",
"assets/packages/meego_common_ui/assets/images/meego_empty.webp": "c63618ffc08a4b93101eeb6e93d39c40",
"assets/packages/meego_common_ui/assets/images/meego_share.webp": "c3097cfcc59f8cfb2790c1cc1b3bfdc2",
"assets/packages/meego_common_ui/assets/images/meego_triangle_down.webp": "ef2d704e70a7d97fe26eb0a4dd87bd9d",
"assets/packages/meego_common_ui/assets/images/meego_delete_icon.webp": "ad7c0600ad68f4d6a092d54bc679bd23",
"assets/packages/meego_common_ui/assets/images/meego_part_checked.webp": "2d3115ced480fa4057877eb550835696",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_group_outlined.webp": "63691da4f8dcc0629af41dc2d7f0b16e",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_bulk_add_outlined.webp": "25c98548f2cafc868b8a32fc19a0ce96",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_bell_outlined.webp": "8a3d80bdee563c8da67af52dd6bba394",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_more_outlined.webp": "0b8069e78b3d79c7cd697141e84b8acd",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_image_outlined.webp": "62ccc7b1b6c547fdd9c43fd10dc64fd1",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_details_outlined.webp": "c8de7618f0455504596f2a6e524ebc41",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_add_sheet_outlined.webp": "d8d6a5a89b3a736984e48dd66b2e079e",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_home_filled.webp": "aceba61d55f6e4ac2ae6687224588ee2",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_yes_filled.webp": "6ee808cba7b88502f9e0a75015b0835f",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_link_lock_outlined.webp": "313536c568ceb8072ad738294035e5a3",
"assets/packages/meego_common_ui/assets/images/mg_icon/mg_single_selected_checkmark_enabled.webp": "e1b28cf5415b6e90ecd8e5fe68765689",
"assets/packages/meego_common_ui/assets/images/mg_icon/mg_multi_selected_disabled.webp": "8ca130627f7899a49605202a193e5929",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_close_small_outlined.webp": "6412a23a6b52807a03773c43e59ab0bf",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_right_small_ccm_outlined.webp": "052b68ed31a79276623a66ab799daec7",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_status_vacation_outlined.webp": "2bd9fe20aaf9b3433d176a942a52dce0",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_line_feed_outlined.webp": "07faba1025b8f9bdceae46fc25279e8a",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_collect_filled.webp": "278cb8e101c061bf9310f4a736831eda",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_bell_filled.webp": "9a3b93f00b676ccd019198c0e4a591aa",
"assets/packages/meego_common_ui/assets/images/mg_icon/mg_single_unselected_radio_enabled.webp": "80607d22b0bc74dd4585168a6127055a",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_logout_outlined.webp": "7d19a7dbda4bd93c423e433159d7a14c",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_translate_outlined.webp": "4a71af3176ab2adfbd1b5e6d6db06947",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_expand_right_filled.webp": "5acb5ea83edde2d1e91f1fd98e31d5e1",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_delete_filled.webp": "e7729c2520401e69dfef2586dca66c9d",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_invisible_outlined.webp": "0beaf0e48943e019d76da2fbd8bccefb",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_more_vertical_outlined.webp": "af0e874b811f895ad94b83ece2526f1d",
"assets/packages/meego_common_ui/assets/images/mg_icon/mg_multi_selected_enabled.webp": "7339116df478f6d42030bb6dd0b603de",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_time_filled.webp": "4869a2bb2782e76a3f43973b92c3dd2a",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_refresh_outlined.webp": "22ef134f8b2499bd77d10c8543fbb64b",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_album_outlined.webp": "415d0be42d0edd673177905cb886d610",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_expand_up_filled.webp": "ee4e00ac8a35ee1d75cb4bbc3367476e",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_app_outlined.webp": "ec3f7ae0b8e5b200af4ec851ea3dc5ee",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_left_outlined.webp": "b067d406282a869dadb0f8b2b3c2c12e",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_left_small_ccm_outlined.webp": "226acbdd3ee8ed4811261a0846e0d369",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_add_outlined.webp": "b04092e03892e41e11f6139080a2c687",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_maybe_filled.webp": "b920a4d71ccc164c791becadeb20f487",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_setting_filled.webp": "01f32e181be77b484041c991a26639de",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_time_outlined.webp": "63e97fbca630520e2d1dc1dd3314797b",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_delete_trash_filled.webp": "819ad1e0451539dd021db25cb4e88c81",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_nopicture_filled.webp": "1602610e6d7523a5e5167f241b92d128",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_close_outlined.webp": "ee745d4990ad41607daf64cb0b5c170a",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_more_add_outlined.webp": "92fcf1aeac1e01b03c1127c6d0c128b4",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_delete_trash_outlined.webp": "6be047cd63d5f54880571ddfc69b03fe",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_up_outlined.webp": "b5072881071b3c3bd09358cdfc1913b5",
"assets/packages/meego_common_ui/assets/images/mg_icon/mg_single_unselected_radio_disabled.webp": "9f24b35d8d1b864fc564e4496a84c962",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_image_search_outlined.webp": "e90929b8a98225fc2ba6f2f25a02c881",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_expand_left_filled.webp": "7d3fb68d8c34a41c14e4d1d17d8d77ae",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_status_vacation_filled.webp": "b2c2b157a9779bf545663e16b8bd2610",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_yes_outlined.webp": "eed0114edfd569877fd83d5d7bb37238",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_search_outline_outlined.webp": "6968d8ff8c6bdece094502565c108862",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_warning_outlined.webp": "4be3762b583e92795155d0e8f721f727",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_down_outlined.webp": "4f4d6cf42d18cbbe9db49796952476e9",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_maybe_outlined.webp": "48ccbe16151300a604f17c516ffbb673",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_done_outlined.webp": "d6616498d3b884c8e3b112c928abe5f2",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_right_outlined.webp": "a6c88602f21b76e2834376b93c56eac7",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_expand_down_filled.webp": "60dbd462a078dae2ebd4cfc1f2a5d22c",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_like_outlined.webp": "fb1eeb26c3794ac7847f4c6678c69705",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_share_outlined.webp": "a2c0232282e5f0150c58c4eded87f5f2",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_select_outlined.webp": "d1bb2c2ad3d18d1463aa0209725337ab",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_calendar_slide_outlined.webp": "365ec43fd571774abc93ef577672b620",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_loading_outlined.webp": "2a00c6d7c294ff7660fc87dd50a42aae",
"assets/packages/meego_common_ui/assets/images/mg_icon/mg_multi_unselected_enabled.webp": "80607d22b0bc74dd4585168a6127055a",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_recall_outlined.webp": "3c498adccdbc72993ce0715a293257ba",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_member_outlined.webp": "df1a551e033273b40b184d917cdbc7ae",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_at_outlined.webp": "7649961ce86c5dd77a8382aaf1b0ddcd",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_clear_outlined.webp": "eca24f413d85fe3ee63c1a6581f413a7",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_visible_lock_filled.webp": "abf6e62870979cf2486ffbc7aead6ed3",
"assets/packages/meego_common_ui/assets/images/mg_icon/mg_single_selected_checkmark_disabled.webp": "6a25d9057be6659b145817d5bd316234",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_up_small-ccm_outlined.webp": "db5f65b5e7538fbfa1c0371ac55b842a",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_arrow_outlined.webp": "f61e01a7318280c10ec0d508757fc8cc",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_export_outlined.webp": "d50f760b36b77b81d5b90c5d2d9bdaf9",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_like_filled.webp": "1cad5d0bb932fb8531b6e5aa9ee44cb1",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_edit_outlined.webp": "b69bb88d92a561dac46e19b5da593fec",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_replace_outlined.webp": "082e37bca907813349cb23ffe4930a74",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_more_add_filled.webp": "a4181407800784a655806c3e6f23caa7",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_doc_outlined.webp": "6a55e326eac23f9484cf88225f036d3d",
"assets/packages/meego_common_ui/assets/images/mg_icon/mg_single_selected_radio_enabled.webp": "826b2c4528926c9a054315d582fd34f7",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_loadfail_filled.webp": "a08e3d0663ab8888e7b65fc1e4c907aa",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_arrow_down_outlined.webp": "c1547531245374ac63355214778e92c9",
"assets/packages/meego_common_ui/assets/images/mg_icon/mg_multi_part_selected_enabled.webp": "6289a451ef6dd273459a9e38e6f2b739",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_image_fail_outlined.webp": "8d1ff7c41dbc515a7c9c84745e1530ab",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_close_filled.webp": "e2817ff1aa189df01328785c77a19fd8",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_home_outlined.webp": "7410347e607e7a1ec185aeea42a59ad3",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_more_close_outlined.webp": "bf4b57ee219a9a5a235a4ba46f6e5f81",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_collection_outlined.webp": "495acb2b43b63ed70fa637dfc3aab439",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_no_outlined.webp": "8c3d8e559536a664f25ba04441c562db",
"assets/packages/meego_common_ui/assets/images/mg_icon/mg_single_selected_radio_disabled.webp": "f6d18626dd3ae46093669f9b3fdbea29",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_repeat_outlined.webp": "68bc32dbc3e3a7e3117ee896758c632c",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_camera_filled.webp": "abd3f3a54b6dd78923cfeddd6a16a846",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_tab_todo_outlined.webp": "493fd5c6381a34e1b141e8c07f0d51f3",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_warning_filled.webp": "c67b47196217cc4680057327ca3da4ee",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_switch_outlined.webp": "0b8c5e6fe3036050123164a9ac631f09",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_report_outlined.webp": "a49fea212ded59d4648ad6ad6611fac6",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_visible_outlined.webp": "6451edd5dd0b541d1cc45261b97e97e6",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_info_outlined.webp": "e01c665c04b4a396dd4d2e9c9ae3e432",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_filter_outlined.webp": "0a97302e7c84cf19fe3fa59234a00fdc",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_import_outlined.webp": "389b63a5a0817bd35c993b5136dd7057",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_visible_lock_outlined.webp": "af290fef648b40ac9ec3596087378937",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_camera_outlined.webp": "46bfa14d5d5f4ccc672fe42427304690",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_menu_outlined.webp": "6cb6f6334e99e27982eb3839ac1dd9cd",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_more_box_outlined.webp": "59dd866681214fc066541b2541f73de5",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_down_small_ccm_outlined.webp": "f3a67761771d9e14b5a5148bc9307919",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_setting_outlined.webp": "8a27d3962ddb6d7cfcdfd6dc92e4e426",
"assets/packages/meego_common_ui/assets/images/mg_icon/mg_multi_unselected_disabled.webp": "27bf78d47c2116aeae5108fbc885d335",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_arrow_left_outlined.webp": "f76073b985ab925d9e6179cf72c6446d",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_link_copy_outlined.webp": "22c7775e3528adf46bf9dcd84120f97a",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_visible_filled.webp": "52a6344ddcdb333a4214a2028e2bf6cd",
"assets/packages/meego_common_ui/assets/images/mg_icon/mg_multi_part_selected_disabled.webp": "9f38c2966af2e6d07e2b078cab401812",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_no_filled.webp": "18b9d0adf3e0cd0601253ab15129d153",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_send_filled.webp": "55c2e44f14c739928b4254cdcf495e8b",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_navigate_outlined.webp": "107b23082d0331d1ccf6a9211004241a",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_info_filled.webp": "41b15a1ec4cceb3d9aafb5db9b96ca9c",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_treelist_outlined.webp": "63ad0b717c207d30da0a015d810c18d0",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_team_add_outlined.webp": "ed467f28f4f25379104cd9cbb56bd763",
"assets/packages/meego_common_ui/assets/images/mg_icon/icon_arrow_up_outlined.webp": "3857bbae93ac46907c504f526ea209e2",
"assets/packages/meego_common_ui/assets/images/meego_back.webp": "24c195ad3bb02eab2fc3f907a31a1ab6",
"assets/packages/meego_common_ui/assets/images/meego_logo.webp": "46b375ef317018145552166e72b9a8f5",
"assets/packages/meego_common_ui/assets/images/meego_default_avatar.webp": "b0c35f5f3dfff713189061b39c0275df",
"assets/packages/meego_common_ui/assets/images/feishu/mg_file_empty.webp": "ba444901ac2f2933d0d8346ef082e68a",
"assets/packages/meego_common_ui/assets/images/feishu/mg_data_empty.webp": "cf7cd628211687c7b666481a1bfcc0ff",
"assets/packages/meego_common_ui/assets/images/feishu/mg_search_empty.webp": "838083519ea9e3b9b592b5d2befac531",
"assets/packages/meego_common_ui/assets/images/feishu/mg_network_error.webp": "922ca26dc320156caf3ed97fbe04bb4a",
"assets/packages/meego_common_ui/assets/images/meego_arrow_down.webp": "bf0ecc2f57ae8d7bad26f3cd71108fde",
"assets/packages/meego_common_ui/assets/images/meego_close.webp": "d171682d1c6feb0813e953cfc172566a",
"assets/packages/meego_common_ui/assets/images/toast/toast_success_lark.webp": "3b9f1e7b3b1c67424363358852809729",
"assets/packages/meego_common_ui/assets/images/toast/toast_warning.webp": "0770869b8f6d70b1a57e5ba027bc1f97",
"assets/packages/meego_common_ui/assets/images/toast/toast_info_lark.webp": "a66c6c3c7391b888669927fc4856db8a",
"assets/packages/meego_common_ui/assets/images/toast/toast_loading.webp": "2f3d978a2a6febd499bb729e7f393dff",
"assets/packages/meego_common_ui/assets/images/toast/toast_success.webp": "e3493347b97896bef2ba59d261b2bf2e",
"assets/packages/meego_common_ui/assets/images/toast/toast_error.webp": "c683b965ba7e3d7a96dd433247d11dc0",
"assets/packages/meego_common_ui/assets/images/toast/toast_info.webp": "30440faf6c67c5b66aeecc3c12a69e23",
"assets/packages/meego_common_ui/assets/images/toast/toast_error_lark.webp": "8d40f4af00a4f09437c8ebcedcfb0211",
"assets/packages/meego_common_ui/assets/images/meego_checked_disabled.webp": "bbfed3d13be72e57fddf2f414233dd56",
"assets/packages/meego_common_ui/assets/images/meego_searchbar_clear.webp": "772655972180dd8469fa29d099d13ade",
"assets/packages/meego_common_ui/assets/images/meego_icon_more_outlined.webp": "c2aa70a7f569006a6500a942937d5687",
"assets/packages/meego_common_ui/assets/images/meego_add_disable.webp": "25a4743b7c7f8921c538dcbd7ddd790d",
"assets/packages/meego_common_ui/assets/images/meego_expand.webp": "23f650f943ee4196ec249c057a467b30",
"assets/packages/meego_common_ui/assets/images/meego_loading.webp": "a2a1280ceb8566d9b2b5a300024fae9c",
"assets/packages/meego_common_ui/assets/images/meego_unchecked.webp": "9a6eca27079397cb300913d657bfa462",
"assets/packages/meego_common_ui/assets/images/meego_add_enable.webp": "58d2582687cc46e7ba8a82cbf08ec5d0",
"assets/packages/meego_common_ui/assets/images/meego_current_user.webp": "8d645ee7a06e5d19c591540d749dca10",
"assets/packages/meego_common_ui/assets/images/meego_unchecked_disabled.webp": "14770b1c369b9727d89074246188d81b",
"assets/packages/meego_common_ui/assets/images/meego_searchbar_icon.webp": "4f700a341a3878d4406cd8cac373f1d5",
"assets/packages/meego_common_ui/assets/images/meego_empty_lark.webp": "ef33aea3a3b9cb6a9030836b8f172e24",
"assets/packages/meego_common_ui/assets/images/meego_right_arrow.webp": "bb0ba74586f8e1da16fccc9f29b46ed6",
"assets/packages/meego_common_ui/assets/images/meego_collapse.webp": "46fe131a89662a26c59f72027084b1a4",
"assets/packages/meego_common_ui/assets/images/meego_checked.webp": "f43f7ffd4c133e118507601f3a28a27a",
"assets/packages/meego_common_ui/assets/images/meego_navigation_drawer.png": "50cc921099dd14d9f94d8ad5281f53dc",
"assets/packages/meego_common_ui/assets/images/meego_splash.webp": "7892bc6839440b9e3b1e5b6bc5ec0e17",
"assets/packages/meego_common_ui/assets/images/meego_default_team_icon.webp": "355b29abd23b5047bb46ac69f2dc03e6",
"assets/packages/meego_common_ui/assets/images/meego_left_arrow.webp": "6d914a4795ba7b8ce5cdc6b8b1e3fbfa",
"assets/packages/meego_common_ui/assets/images/meego_next_level.webp": "4457a238f52fd87e1be793b064a376a8",
"assets/packages/meego_common_ui/assets/images/meego_close_black.webp": "05930917629f7020fa8c56d59518d6d0",
"assets/packages/meego_common_ui/assets/images/meego_right_blue.webp": "5ab472a79cc1935b4c117801a9850933",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
