class ImportStructure < ActiveRecord::Migration
  def change
    create_table "users", force: true do |t|
      t.string   "email",                  default: ""
      t.string   "github"
      t.string   "first_name"
      t.string   "last_name"
      t.string   "avatar_url"
      t.string   "company"
      t.string   "blog"
      t.string   "location"
      t.boolean  "hireable"
      t.integer  "public_repos"
      t.integer  "public_gists"
      t.integer  "followers"
      t.integer  "following"
      t.string   "encrypted_password",     default: "", null: false
      t.integer  "sign_in_count",          default: 0
      t.datetime "current_sign_in_at"
      t.datetime "last_sign_in_at"
      t.string   "current_sign_in_ip"
      t.string   "last_sign_in_ip"
      t.string   "authentication_token"
      t.string   "screen_name"
      t.datetime "created_at",                          null: false
      t.datetime "updated_at",                          null: false
      t.text     "auth_uid"
      t.string   "reset_password_token"
      t.datetime "reset_password_sent_at"
      t.datetime "remember_created_at"
      t.string   "confirmation_token"
      t.datetime "confirmed_at"
      t.datetime "confirmation_sent_at"
      t.string   "unconfirmed_email"
      t.integer  "failed_attempts",        default: 0
      t.string   "unlock_token"
      t.datetime "locked_at"
    end

    create_table "providers", force: true do |t|
      t.integer  "user_id",    null: false
      t.string   "provider",   null: false
      t.string   "uid",        null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end

    create_table "languages", force: true do |t|
      t.string   "language"
      t.integer  "user_id"
      t.datetime "created_at"
      t.datetime "updated_at"
    end
  end
end
