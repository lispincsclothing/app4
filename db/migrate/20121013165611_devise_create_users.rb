class DeviseCreateUsers < ActiveRecord::Migration
  def change
    create_table(:users) do |t|
      t.string :email, :null => false, :default => ""
      t.string :encrypted_password, :null => false, :default => ""

      ## Trackable
      t.integer  :sign_in_count, :default => 0
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string   :current_sign_in_ip
      t.string   :last_sign_in_ip

      ## Token authenticatable
      t.string :authentication_token

      ## Non-devise fields
      t.string :twitter, :github, :screen_name

      t.timestamps
    end

    add_index :users, :authentication_token, :unique => true
  end
end
