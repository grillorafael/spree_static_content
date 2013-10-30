Deface::Override.new(:virtual_path => "spree/admin/shared/_menu",
                     :name => Spree.t("static_content.admin_tab"),
                     :insert_bottom => "[data-hook='admin_tabs']",
                     :text => "<%= tab(:pages, :icon => 'icon-file') %>",
                     :disabled => false)